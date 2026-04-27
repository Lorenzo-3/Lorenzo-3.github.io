(() => {
    const root = document.documentElement;
    document.body.classList.add('js');

    const safeStorage = {
        get(key) {
            try { return localStorage.getItem(key); }
            catch { return null; }
        },
        set(key, value) {
            try { localStorage.setItem(key, value); }
            catch { /* storage can be blocked in private/file contexts */ }
        }
    };

    const storedTheme = safeStorage.get('theme');
    if (storedTheme === 'light' || storedTheme === 'dark') {
        root.dataset.theme = storedTheme;
    }

    const themeButton = document.querySelector('[data-theme-toggle]');
    const themeIcon = document.querySelector('[data-theme-icon]');
    const systemPrefersDark = () => window.matchMedia('(prefers-color-scheme: dark)').matches;
    const currentTheme = () => root.dataset.theme || (systemPrefersDark() ? 'dark' : 'light');

    const syncThemeIcon = () => {
        if (!themeIcon) return;
        themeIcon.textContent = currentTheme() === 'dark' ? '☀' : '☾';
    };

    syncThemeIcon();

    themeButton?.addEventListener('click', () => {
        const next = currentTheme() === 'dark' ? 'light' : 'dark';
        root.dataset.theme = next;
        safeStorage.set('theme', next);
        syncThemeIcon();
    });

    const progress = document.createElement('div');
    progress.className = 'scroll-progress';
    document.body.appendChild(progress);

    const updateProgress = () => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
        progress.style.width = `${Math.min(100, Math.max(0, pct))}%`;
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);

    const revealTargets = document.querySelectorAll('.hero, .profile, .card, .footer');

    revealTargets.forEach((el, index) => {
        el.classList.add('reveal');
        el.style.transitionDelay = `${Math.min(index * 35, 210)}ms`;
    });

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });

        revealTargets.forEach((el) => observer.observe(el));
    } else {
        revealTargets.forEach((el) => el.classList.add('is-visible'));
    }

    document.querySelectorAll('.type-rotator').forEach((el) => {
        const words = (el.dataset.words || '')
            .split(',')
            .map((w) => w.trim())
            .filter(Boolean);

        if (words.length < 2 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        let index = 0;

        const swapWord = () => {
            index = (index + 1) % words.length;

            const fadeOut = el.animate(
                [
                    { opacity: 1, transform: 'translateY(0)' },
                    { opacity: 0, transform: 'translateY(-6px)' }
                ],
                { duration: 140, easing: 'ease-out' }
            );

            fadeOut.finished
                .catch(() => { })
                .then(() => {
                    el.textContent = words[index];

                    el.animate(
                        [
                            { opacity: 0, transform: 'translateY(6px)' },
                            { opacity: 1, transform: 'translateY(0)' }
                        ],
                        { duration: 180, easing: 'ease-out' }
                    );
                });
        };

        setInterval(swapWord, 2300);
    });

    const filterGroup = document.querySelector('[data-filter-group]');

    if (filterGroup) {
        const cards = Array.from(document.querySelectorAll('.project-card[data-tags]'));
        const status = document.querySelector('[data-filter-status]');
        const isItalian = document.documentElement.lang === 'it';

        const labelFor = (filter, visible) => {
            if (isItalian) {
                return filter === 'all' ? 'Tutti i progetti visibili' : `${visible} progetti visibili`;
            }

            return filter === 'all' ? 'Showing all projects' : `Showing ${visible} projects`;
        };

        const setFilter = (filter = 'all') => {
            let visible = 0;

            cards.forEach((card) => {
                const tags = (card.dataset.tags || '').toLowerCase().split(/\s+/).filter(Boolean);
                const show = filter === 'all' || tags.includes(filter);

                card.hidden = !show;
                card.classList.toggle('is-hidden', !show);
                card.setAttribute('aria-hidden', String(!show));

                if (show) visible += 1;
            });

            filterGroup.querySelectorAll('[data-filter]').forEach((button) => {
                const active = button.dataset.filter === filter;
                button.classList.toggle('is-active', active);
                button.setAttribute('aria-pressed', String(active));
            });

            if (status) status.textContent = labelFor(filter, visible);
        };

        filterGroup.addEventListener('click', (event) => {
            const button = event.target.closest('[data-filter]');
            if (!button) return;

            event.preventDefault();
            setFilter((button.dataset.filter || 'all').toLowerCase());
        });

        setFilter('all');
    }

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!reduceMotion && window.innerWidth >= 700) {
        const canvas = document.createElement('canvas');
        canvas.className = 'network-bg';
        canvas.setAttribute('aria-hidden', 'true');
        document.body.prepend(canvas);

        const ctx = canvas.getContext('2d');
        const nodes = [];
        const edges = new Map();
        const nodeCount = Math.min(70, Math.max(50, Math.floor(window.innerWidth / 30)));
        const maxEdges = Math.floor(nodeCount * 1.8);
        const edgePadding = 28;
        let lastMutation = 0;
        let nextMutationDelay = 900;

        const cssVar = (name, fallback) => getComputedStyle(root).getPropertyValue(name).trim() || fallback;
        const edgeKey = (a, b) => a < b ? `${a}:${b}` : `${b}:${a}`;

        const resize = () => {
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            canvas.width = Math.floor(window.innerWidth * dpr);
            canvas.height = Math.floor(window.innerHeight * dpr);
            canvas.style.width = `${window.innerWidth}px`;
            canvas.style.height = `${window.innerHeight}px`;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        };

        const distance = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);

        const formRandomEdge = (instant = false) => {
            const a = Math.floor(Math.random() * nodes.length);

            const candidates = nodes
                .map((node, index) => ({
                    index,
                    d: index === a ? Infinity : distance(nodes[a], node)
                }))
                .filter((item) => item.d < 160)
                .sort((x, y) => x.d - y.d)
                .slice(0, 6);

            while (candidates.length) {
                const choiceIndex = Math.floor(Math.random() * candidates.length);
                const b = candidates.splice(choiceIndex, 1)[0].index;
                const key = edgeKey(a, b);

                if (edges.has(key)) continue;

                edges.set(key, {
                    a,
                    b,
                    strength: instant ? Math.random() * 0.30 + 0.28 : 0,
                    target: Math.random() * 0.34 + 0.24,
                    dying: false,
                    bornAt: performance.now()
                });

                return true;
            }

            return false;
        };

        const seedNodes = () => {
            nodes.length = 0;
            edges.clear();

            for (let i = 0; i < nodeCount; i += 1) {
                nodes.push({
                    x: edgePadding + Math.random() * Math.max(1, window.innerWidth - edgePadding * 2),
                    y: edgePadding + Math.random() * Math.max(1, window.innerHeight - edgePadding * 2),
                    vx: (Math.random() - 0.5) * 0.18,
                    vy: (Math.random() - 0.5) * 0.18,
                    r: Math.random() * 1.8 + 0.9,
                    pulse: Math.random() * Math.PI * 2
                });
            }

            for (let i = 0; i < Math.floor(nodeCount * 1.05); i += 1) {
                formRandomEdge(true);
            }
        };

        const severRandomEdge = () => {
            const living = Array.from(edges.values()).filter((edge) => !edge.dying);
            if (!living.length) return false;

            living[Math.floor(Math.random() * living.length)].dying = true;
            return true;
        };

        const mutateGraph = (now) => {
            if (now - lastMutation < nextMutationDelay) return;

            lastMutation = now;
            nextMutationDelay = 200 + Math.random() * 400;

            if (edges.size < maxEdges && Math.random() > 0.30) {
                formRandomEdge(false);
            } else {
                severRandomEdge();
            }
        };

        const stepEdges = () => {
            for (const [key, edge] of edges.entries()) {
                edge.target = edge.dying ? 0 : edge.target;
                edge.strength += (edge.target - edge.strength) * 0.035;

                const a = nodes[edge.a];
                const b = nodes[edge.b];
                const d = distance(a, b);

                if (d > 320) edge.dying = true;
                if (edge.dying && edge.strength < 0.015) edges.delete(key);
            }
        };

        const draw = (now = 0) => {
            const accent = cssVar('--accent2', '#64f5e1');
            const accentWarm = cssVar('--accent', '#ffd025');

            ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

            nodes.forEach((node) => {
                node.x += node.vx;
                node.y += node.vy;
                node.pulse += 0.020;

                if (node.x < edgePadding || node.x > window.innerWidth - edgePadding) {
                    node.x = Math.min(window.innerWidth - edgePadding, Math.max(edgePadding, node.x));
                    node.vx *= -1;
                }

                if (node.y < edgePadding || node.y > window.innerHeight - edgePadding) {
                    node.y = Math.min(window.innerHeight - edgePadding, Math.max(edgePadding, node.y));
                    node.vy *= -1;
                }
            });

            mutateGraph(now);
            stepEdges();

            for (const edge of edges.values()) {
                const a = nodes[edge.a];
                const b = nodes[edge.b];
                const d = distance(a, b);
                const fadeByDistance = Math.max(0, 1 - d / 320);
                const alpha = edge.strength * fadeByDistance;

                if (alpha <= 0.01) continue;

                const age = now - (edge.bornAt || 0);
                const birthGlow = age < 500 ? (1 - age / 500) * 0.75 : 0;
                ctx.globalAlpha = Math.min(1, alpha + birthGlow);
                ctx.strokeStyle = edge.dying ? accentWarm : accent;
                ctx.lineWidth = edge.dying ? 0.85 : 1;
                ctx.beginPath();
                ctx.moveTo(a.x, a.y);
                ctx.lineTo(b.x, b.y);
                ctx.stroke();
            }

            nodes.forEach((node) => {
                const pulse = 0.65 + Math.sin(node.pulse) * 0.12;

                ctx.globalAlpha = 0.30 + pulse * 0.14;
                ctx.fillStyle = accent;
                ctx.beginPath();
                ctx.arc(node.x, node.y, node.r + pulse * 0.22, 0, Math.PI * 2);
                ctx.fill();
            });

            ctx.globalAlpha = 1;
            requestAnimationFrame(draw);
        };

        resize();
        seedNodes();
        draw();

        window.addEventListener('resize', () => {
            resize();
            seedNodes();
        });
    }
})();
