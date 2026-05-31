# Tiny Kitten DDPM 64 export target

This directory is intentionally deployable before training. The page checks for:

- `metadata.json`
- `kitten_denoiser.onnx`
- optional `previews/*.png`

Run `notebooks/tiny_kitten_ddpm_64.ipynb` with your kitten/cat dataset to create the ONNX model and preview images. Until `kitten_denoiser.onnx` exists, the playground shows a clear fallback and keeps the procedural diffusion toy usable.
