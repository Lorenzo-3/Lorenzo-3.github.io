# Tiny Kitten DDPM 64 export target

This directory is intentionally deployable before training. The page checks for:

- `metadata.json`
- `kitten_denoiser.onnx`
- optional `previews/*.png`

Run `notebooks/tiny_kitten_ddpm_64.ipynb` with your kitten/cat dataset to create the ONNX model and preview images. The sampler stays hidden until `metadata.json` has `status: "trained"` and `kitten_denoiser.onnx` is available. The procedural diffusion toy remains usable independently.
