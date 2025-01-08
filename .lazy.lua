local nvim_lsp = require("lspconfig")

return {
	{
		"neovim/nvim-lspconfig",
		opts = {
			servers = {
				denols = {
					filetypes = { "typescript", "typescriptreact" },
					root_dir = function(...)
						return nvim_lsp.util.root_pattern("deno.jsonc", "deno.json")(...)
					end,
				},
				vtsls = {
					enabled = false,
				},
			},
		},
	},
}
