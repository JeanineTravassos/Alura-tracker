(function(){"use strict";var o={1465:function(o,a,e){var t=e(9242),r=e(3396),s=e(7139);const n={class:"column is-one-quarter"},i={class:"column is-three-quarter conteudo"};function l(o,a,e,t,l,c){const d=(0,r.up)("BarraLateral"),u=(0,r.up)("Notificacoes"),m=(0,r.up)("RouterView");return(0,r.wg)(),(0,r.iD)("main",{class:(0,s.C_)(["columns is-gapless is-multiline",{"modo-escuro":o.modoEscuroAtivo}])},[(0,r._)("div",n,[(0,r.Wm)(d,{onAoTemaAlterado:o.trocarTema},null,8,["onAoTemaAlterado"])]),(0,r._)("div",i,[(0,r.Wm)(u),(0,r.Wm)(m)])],2)}var c="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARUAAACBCAYAAADubi4DAAAACXBIWXMAAAsSAAALEgHS3X78AAAeTUlEQVR4nO2dC5AVVXrHv5lBwB0UEAEDSYAZl3JXHu7GB44xuiuI1ro8rbJWUUm5ykPXAh+kNFsK1m6yi6CYKkDRVIg8UklEHsvGIBJxLZFVYwR0a9eCUbJKAbEUlJEBZuam/j393TnT9Ol7Tnffftz5flW35s5M39t9+/b59/c636kqFAoUwFAimk5EVxPRRUTUO2hjQRAqll1E9B4RbXAfWnSiAgFZQkRXyTUiCIKH/UQ0n4hW+p0YP1GZQ0RPylkUBKEErxHRJCI6om7mFRUoz+1yJgVBMGSXGx4pCku18ro5IiiCIFgymoi2E1EffhlbKoih/I+cTUEQQvKUa5gURWW7BGUFQYjIMCL6uNr1h0RQBEGICjJCTkxlupxKQRBiAJkgx/35mIiGVOoZ3bVrF+3bt4+OHTvmPAeHDh1yHkEMHDjQefTq1Yvq6+uLP0ePHp3uBxKEbPM9iEpgSW2egFBAOPhRSjjCArGBuPADvwuC4DA396ICK2TLli20Y8eOsolIKSAqDQ0NNH78eMeaEYQuzIJcigrEA0Ly8ssvpyYkOlhgpk6dKhaM0BXJl6jApXnxxRcdqyQPjBo1im677TaJwwhdiXyICsTk+eefp927d8f2nrU9a6h+UE/f/+070ExNza2x7QsWC8Tl2muvje09BSGjZFtUoooJC8eo+l5UP+hM6nVmNdU5P2uMXn/seCs1HjhOB784RYc+P0m79x2LJDgQl1mzZtEVV1wR6vWCkAOyKSqIkyxbtszazYGIjKqvpdH1vahhxNk0sG/38hzfFydp174m2vH+Udq9r8laZOAWzZ49W4K6QiWSPVGBZbJq1Sqr14y7uC81XNjbEZI02PH+l7Tjg6POTxuBufXWW2nKlClODYwgVAjZERWkhhcuXEiNjY1G2w/o252mXHmuIyim7ky5gbu044MvadXLh+jwFyeN9gaX6MEHH5RgrlApZENUkNFZvny50baj6mpp8pX9U7NKTEH8BeKyu7HJ6BWwWhDMFYSck66ooHT+8ccfN4qd1A3qSbMmDHKCrnnCRlwQa1mwYIG4Q0KeSU9UTN0dBF9nThxE117cN7FjKweItyzfdKCkW1RbW0uLFy+WIK6QV9IRFaSKH330UWpqCr57T77yXJo2bmBmYiZRQcxl/euf0eqtwVXAEBbEWST1LOSQ5EUFpfVweYJAEPbBm/40d66OKfsOHKf5K/eXtFogLFIwJ+SMZEXFRFAuv/BseuCmP6sY60QHrJanNx2gre98EbidCIuQM5ITFRNBmTlhkOPydCVefucLWvyvfwz8xCIsQo5IRlRKCQqCsfOnD6lYd6cUcIceXN4YWDgnwiLkhAXV5T7ON954I1BQED95fFZdlxUUUD+gjRbe0YcG9NF/HTiHEGdByDplFRWkjYMEBbUny+d+05ns1+VoO0mFE59R4ev9VGg+SPXnNtOyGT2pbqD+K8F8KJxTQcgyZXN/UNg2bdo0bdoYgvL4zPqKD8h2otBC1NJEhVNfEbWd8N3kWHOB5q1spsZDbb7/R7p59erVUiAnZJXyuT/333+/CAootBG1fOVYI4Wm/Y51ohMU0KtnFS2crrdYcE5xbgUhq5RFVGCm6yplEZTtCiljxyI5cdh1bw47v5sCYbl/Ug+q7VHl+wqcW5xjQcgisYsKqmXXr1/v+z8ICoKyFRtD8cRJCG5Owd+NKUX9edWOxaITFpxjXnJEELJErKLCEwR1YA5PxQkK4iSnjlLh60+o8PUfnefU1hLLW0NYZl6nbzSFc41zLghZIlZRQYMlXXd7FLXlfVJgEcs4SRTGXdSNxo3u5vsOONc454KQJWITlSC3B4FZVMvmnghxkijMuK67NnArbpCQNWITFV3gkAOzuSXGOElYOHBre+4FIQ1iERVUeuqyPXB7chdHKWOcJCyIr0y76gzfV+PcS7WtGSge5GVxpZCwPPg76xYgUKi7U8LtufXanKzSB+ujtYkKcGkScmtsmXZ1d3r5vRY6fPT0ekXEVpKeG4SB+cADDzjPt27dmui+w4JrlZd8Qac9NMQS4iWypYL+sroit1l5iKOkFCcJywMaNwhB265mrUAgxo0bV3xI0DobRLJUYKVAVPxAl/ugSYJ7Gr9O9ASMrPtGxy+Ik5z60rFMTNyapmbSls2Xi5FD/PV+1NAaGjmkhvbsP31GcxrWSpp4extDVKV5ePpEEhV8qTorJcjt+dnqT2jn775K9MMPPrc7PfOTcwPn3fgBV2P2M6foRMIhlcuGV9NPb/T/emCt3P7U6aLM1kpXEBbMfveWL+B3uGSy3Em6RHJ/dOYmrJRyrQ4Ylk8/O0kbXj9kXU/y/KutiQtKKQb2qdLWrqxbty5Lh1o2VCsFaycxErBOn9CWCu4IukK3UsHZiQ3nFC2VAX3OoLk3msdeXnn3CG179yjNu2kw9T1Lc/itx6nQ1kzU2uwEYB/7txZqPkW0ansrjR1VQ7X+67Kfxp79bfTa79rdnuGDqmj698zmK73b2EYvvNlGPx5bQ3UD/cvs/ViyubUYhL35yuB9TRpzBm3ddbraIROErEYld+OH262KB1weruSGBYP1qsPM4sb7qhkhncWDbbiS+bzzzuskaup7qP/DWMGx4f/4u9ea5Nd5a47wPeatAXpoUdHdEUysFMQ3xnz7LEdYDh85VfybCXWDejiv+4+3vqBf3Dmk4xXaOEk1zRzfjZZsbnEsjn/e3kqzrzMTh5WvdsQt7r6+m5FAIP7y8xdaaMSfV9HES80nTW7b3VYUlGtGVpfcF1LMutgK4lzoFFepeK0UDFCu5oY7jv+HcQExqDmbRQEZLTWD5F0ETn0P/h9mlfP25Gad+Pi4KhqCowsl4DNiPai83ChCuT/eO4WKaSn+nT/oUPcnXzhgvG8U0915w3n0/kdf084PvjSqJ7lmVDUNPqd9kL70bis1HirdQgaD/MMD7dtd/11zi2Pj263UdIJo7g/N9RpCtPb1dnGo7UF05ziz104e41+3ggu0klFdvIaGhk4/wZYtWzLx6blJmSoo5FofKhhLQcvVQHggTHmZ5xVKVHQrCqI1pGlbyIF9z6Cbr2lvcg1rZeMbnxvvf+yoahoxpBut2HzAeN7N3dd3WA1LXwoOkmCQs5XSoxvR7VebWRywNP7l9VaacEkNDeht7vZAiNhK+dGV5u5ZwwX++8EFWqnCggGmFlqOHz++00+AQaxzzZME44RvvnV1dY7lgsf5559fPAq2tPATbtuiRYucqRfz58/vJJT4TvMSLwrl/ugu2CmWnfAnXnEOvfLfRx1RWbvt/2jsX/R2LBFfECdp+aq9jqTQRjf/JdHDawrOHb5U/IHcFO1V3652YiSwQHZ+2EZjhvtrKgb5kab2QX7r1eaDfMXWVsfSMDkehoUIQCBsXCZyhKUbbfjtqdP+jgu6EhcjU60UDES+6+MnfmcxwTU6ZcqU1I5TpVTTcj9XFd8dYjqTJ08u/u3gwYPlPtRYsLZUYILpLBXbRdMhIDeP7e88b2puoxWbPXeXQkvHvJvjBzrNu4FIIPaw6a1W3wpTP2Zd182xPMixVlodi8SLOsj71JoPcgR1f/thm+O6mIoQuULEzLnBvnEVZjH7UamWinrteUVD/V1XP5U0EJOwKX4EmxF/YfIyrcBaVHQzYlGSHyaNPPa7vWnEsPYgLbI6jQeOd8RJmvYHzrvh2MPa3+iXtlDBYJ9yefvAhSUCi8TL8i0df5s3yXyQI3MzbECVE78xhYUIILCrK3gLAgFbnQtUabOXvRlHryWm/o7tsjAITa0lHCuEEEFbLAmMGAoeeZyfZO3+6C7Uhgt7hz6IW67pTw89t995vmLTfvr7af4BSC8QiQmX1jiWxTWj2owGJVyTl95tc0QFr0N8hgclBvk7eztSyKaDfKNrLf3dLXan81nFSrEJ7HrRuUCVVgjmjSmgsXoQWciClcrYQDTUbFIlEJulYuv6OCBOcuIwjRh4yHFlwPv/W3AyL6ZAJCAK6gAthWqBqJYJXCLmbyabDXK4UBAnVMDaWBoQoo8OdwRnbQK7XlC670clWSpwu21duqy7gJzVUQWFA7cc1FVrYPKC1e0RX6xfiwPERozbGyBOcvLIafUkcGV2fnjSScci+IogqmlsArGIh9e0OGJk4n5g8F98frVjleABC+XwUaJPP+9IIZsOchwrjvmuceauEgsRuSnkiZdEawI+aqj/Z66ku1/QlBAdnDGJe9pCXKlduDrqZ/LWvFCJItOsYiUqOv+uflCJ0c/tFwPm3aiuDFwJxDtMsygQCcQknt3aQmOGdzcSo1nja+gO19VZuKGVmk+2C4ptCnnT263WlgYLEbliahPY9QNNnNAZzm/SY6VU16q1J0jPPvPMM9pt4RapWaCwogLx8Fbm6m6sYVCzOVjPyS/+kscexFbuj86c1tamFPu4fmRUT3KzMjhtsjrkxiQwUP2Cr35gPz+6siNo2+yGJGxSyE/+qqU9DWxhabAQAdvAbhA6F6gSGhFBIFSrS61J8UOt74CFE/ZO75flLFdWCW6OV8Dw3cUlYElidUXrvpxOro8bJ3GEJER/Ek6rQiBWWMRJWCTY0jEBYoC0MfMnfcxTyKhzQfznZotiNXKFiLnTwmUqBSYZ+pGX2oYgvBWypSyPqVOndvrdNLbitehQDYsHXo8bKp6vWrUq6scpoooIxIOnGnDFel4XjbMSFd0FWj/oDG09iS3sygCkWxHvMAUigRiFOnCDgBiolbY/+YH5IEdgGMdpY2mwEJE7vydMClkHUst+VIKlomZ9YIWUmiyIuz5cJMbUusD7egUL+0Z1K+bz8HHEFTz1ujsQLLhuKHiDgCHeotap5IVYLJUB3Q/E2sdVTa/aZHUgEohRYOCaihECwkgFP3XHGcaDfK1rDdlUzpLyWZyq27+Kd4XGOo2o5H1doFK1KTpUF8mmZgWl8kEDGSnquNLU3opZv31hImHesFqgHS37vMDteH6O2QxjGzAAOfYw54ZuVhbBvc+dctynf7zbrN7FBmRu7lh60hGjORa1JRAizvjATbMVpJL06E/XPfyx71bl6h+bRI9aCIJqIcNFMWlr4G1jwG0I1LYFeB9dEBvbqW4TtoWgsZXC8cWg1gcU0D7B+xlVF8+7Lz7moOPNEAsiN74e2Kc8a7xj0G3b3Z4lscnqkBurQIrZdF6QDTgW5/gsLA0nOPuWMr8nYgq5SLdvUNU5Y6hq4PepqvcIqqubkcvAXhAYWGHcDQxAvwFtOiixXdC2OrHQ7TcIfL6gNph5y94ZK0LShVTsypAbtOXWACao84L85veEBS0Ttu1pc1LfVink36gpZLvArh9V/S6j6m/eSzVj1lL18HsdQSFP4E8Q0iKymaELEMYBXB6kXcGmt+1SzGxJsGURB3gviImN9YPYDoSI3Pk9upnRpaiqHUrVdXdQzZg1VP2thxzrxBRZwVBIksiK0CviXbcUatrVNKtDrpsBiwID2iaDpAPVuggA26aBVQvLtPlSkR79qWrQD6nm4hVU/Z0lznPqVqvdXCwVIQuUz8yICbgylw3vmBdkIxBcTGfjOvnBndlsLQ0WIoDGTUbd4xAnGfB9qh75M6q55FnHOqGeA4z2V8l9aYX8kHlRAZhXU+uuoYUWAzbAsrCdpOiFO7PZWBoQIna9TBo36eIkgpA3ciEq7MqQm0mxsTxgWfC8oDBBW87cmDSjVuFetRTQIjJKnMSPvE08EyqTXIgKudWy6rwgG4GwnRekwg2gbKyUwBaRlnESGyqhJF/IP5FFZdfHySwHijs9uxBcu2KKY+lcYjcviJTMjU0zavJrERkhThIHEmsRksRYVLJwYSLFzPOCbLM6zsS/HnaTFFHVa9uMWm0ROWZEPxo9dk7qcRLJCglJYiwqWbkwVTfEJrYCSwMWh+kkRQR20ZnNthn1kl93xF1m3L8ocpzEhkqYPNhVQS0RP/I+Xyuy++O3Ql45QbA0bOtJWBwopiuVQeLMjXEzajdO8qsDE4orLt5yyy2JtwL064ymztYVsgvmUPEj7zcHq2oszN70a1F4rLngdB9LiiitJ3leEHrE6twao1UGed5Nv8ucBwb0mn+f7vwLXbwmTZqU2PmgACulElwfv4msJvi1ZxTKj5WlortAGw8mE6xl2JUhN9Nik9XhYjoEbYPW/dGtMlisJ7n42fY4Sb/LnL+vXr26aCncddddjrAkibbXjQRphYSxEhXtNPGERYVcV4YHvW1Wh5tU+2WQ/FYZLNaTIA3M9SRKGhgzgzdu3Og8HzlyZOg7axR0lgqm5gtCkli5PzpRSdpSYbiLPrli8NMbzT4OF9M5FsmlhWJRG2du0L+ltnd/qurnthWoHRb4fmoTZsRS0kA3abASLBW/Xi1ovai2dixXPxfBHitRUReWVtn1cbLBWoZbTyJgy1kd0+5tKKZDkBfWCi9etmRzGw0bfBaNu+m+oltTijfffJP27NnjbDV27NjU2v9pVzoQ96dT4yS1qRIqkCHG7Dr6xV/wf7WxE7nn1LQDHRo9eb8bvB49V2ziXd7mT7qGTd7mUuR2y9NdB2oTLLUBFt6HM1E4ZzYrEliJCr4MxAq8WQa4HoeOFLTNl8sJgql3LG3PuKCu5B9+bCYq7f1aaujnL7TQtsah9HXVYDp89FX6xUN/S1X9zIQB54GtFJyXtKwUXAC6zI/UqLSfH+5Qh/aNs2fPdnrAqr1v1ZsBBhosIQxO3VpD+L7R7lEnLngt95nVgTicaYYQTbDVBlyLFi3q9H8MfiyX6pdIgUWHa2HevHmniQs6zrHFh8+DHsDefeGc2YiKdUpZ19Vqd0rWirrUBupKNr5ldhyIkzRcdyeNvPACWvtfR2jNprdozJgxVpbGhg0b6PDhw85zZHvSWk1O5/roLMuuDATGKyheIBhBgkLuDQXv4zffiptlB70eg9z0esF+1EGOwa+OQwiKd6VDL3g9tgmqgdm7d+9pgkIhMojW7STxYfzWQ9nx+xYad1Hk7pShgCvjzAc6Qe76yJqy+h6nx0lmzLqQ7rnnnvbnM2YY7x4XE0QFDBgwIDUrhQKWoKikdZTjAgOPBx8GNlsaakAbgwid7nl1Q5xH3OG5l+z69eud7SAa+F11m7ANRIDhRcL4u4Co4TWl1i5ivAIIQfFaDcuXL+8kBPg/HvgcWEmABRIPbKtr3M2fi1zLjY/Z1oW2VgF8CTgwL7sTmgPkB7eeXLK5pVi7Umym5Kkn8YILi1PANpbGmjVrinciGzGKG9x5dHcodVEtoTPomu+3IiADofDGWDBI4TqpC5R5rcR169Z1+h3d8FVxx/Og/aqYCAqOQ93G+7nYqmGhw7bYRmd9YBx4j9kWa/dH14i46USBdvw+HReI/FpPVo32rSfxA66LTRoYg/iVV15xniOFfPnll8f/gQzxsxpJ4imBQGxNB7YfQQNOFRnsJ+zgRExHFQsU8vnFNbyi5reN929BFbsQ0qgWbih/BSdLNZWYre+dooYLYl56woK7Jgymh577xHnBkk3N9MtflmfezYoVK4rP77vvvrLswxTvnZExNa+7IqZBRzU7pGaAgvrWqG5I2Mwb3BV1fOF4dZXB3qJHBGujEMdi9qFEBResn6i8+YfW5LNASpxkdO0wGvvxE44VgTQv0r1xWxGoh+ALZ+LEiakFZ8m9uHVLcpimPLsipSw4nNeFCxcGBj5NCHvH946toGvMK3BRjzkO6zaUqECB8UH9FBvWyrSru0c+sEAC4iQImEJMON0bp6jgPdlKge+JJSrTBCayHwiypSl2eQbWCGJkauYG5xICoS4kFnXw2oCUL/bvJ1JqNgfXpIl1VG63OHS6Bj6pX8B2/c6WsomKIyLnuEKi6ZaGLx4xEgRSke7Fz7gyM8j28MWG90x6fo8KLiZd1kdcn/AgjqEKClx979KjEHMTUYH4hLVWEExF5oZv3HBrUNfiFQSICMfV8L/FixfHdzJCErr1gc73QsB263vxrbVTat6NHxAVpHnJFYI4erfiPSBQ5AZBk56F7AUXnF8dBIQuDr+4q+IVamR7vAQFOlULMWwLA9S44Katihm+a794iZoKxzWahT7FoUXFb4V8ZtX2k9GOyu1PUv2dJzv6uFq0X8TA4jSv05LAFYMoPPHEE8VXIwWdJrBSICp+RMlqCKdfR143EkKhy7iRJ46C7XTCElSExtYIrBBkfRhYR16X12sJLVu2LPBbTEJ0IjVp0kWkUbZvba1wH9dvPVTs41pqIl8QiKUg3QsQuI3iA+O1PL/Htuq2HOisFBLXJzJqTALnGIOUMz9wjVBxGoR3TGB7CAF3dcN3h7+ZZmnwfur1hviKmkaG6KGMnoGQ4f1hceGY1f0iBogAdLmJVAKLDwSf00+5n/7Pk3T5BTUlmzeZxEnCAmuFq2VhrYQVA9VKSbPQjdw7jc5KgeUoAdpoeDObeO7NxuialZE7JmBd8HwaCBOeqzOqyTPXqBRwgyAIfCPxxlcgPBAOzgSqVcN+x1duIreT1FkriK2s3n7K939h4iRhQOwDaV8ASyPM9Hh1fk8aLSK94K6ns1Kky1l0YKnoytjJDaAiGBoUpMf3gO2CtrHpcwPxCIqvcIBWtVj8wPEkMXWjqlAomHc30hA0QWvpjDPbF3H3mXeTBPgCpk+f7vzESV25cqVx1kZ9LQK/S5cuTTXjg7sRz7b1wrNvk0Sdjp/0PCN1yn6p/XvbBqhT/IPen10IRm0hwC6RrgUB75dbJ6j4tSJQXRrd8fm1YPBuh//Dc/AWxenaNdicR0MWxCIqODBdzUbd4LPp6cXzjPuTlANYG1xfAmvDNMUMt4fL8efOnZtKRzcGF8vMmTN9A20QOr90oyCkwIJYVihkP9KPxk+/pFW//kOqX66aYkZsxSQCDv9Und+TpqCQ6/bojhvmtgiKkBViW/YUqUxdvMEbsU4DdY6O2v5RRxZaRDLeuSAqiBtJGlnIErGJCu6UQQEuBJbSXCQJ0Xakg8HOnTsDU8wI6GahRST59Ofwgm5egpAlYl2gHUEeXQRaVxGYJGo6WE0Te4+Ti+XUIro0gAg/8sgj2mwPXE7pQStkjVhFhVz/XucGwToIuuuWGxwXuzJIE3PnNhVvi8g0sz3eNoIqcHskhSxkkdhFxZtT94LUs252bRKoQqF2b6OMtYiEoOjKwXH8jz32WOLHJAgmxC4qZFBAhMBtUOPhcoIByXN3IChIxTIIzrLIpNl8qVRjZpxbqZwVskpZRIWU5rs6Sg2ccoL0MM8LwsqCcDHgmiGAS24KOa3gbKnzgkpNacAkZJmyiQq5d9SgwYkBpJvHUm5U1wYWShZaRJYSFIi0pI+FrFNWUSF3MhSCijrQ6CmN4C3EDulicucFpdkiElmeUoKCiZtBLqUgZIWyiwpPdgoSFgymNOpYvN3b0mgRieAwpqoHCQrOnQiKkBfKLipkKCzIdGBuS9huWWHg1pMMr/+TFKgyRh2MLm1MrqDg3EkZvpAXYplQaAovzxg0iMhgoae4QWoZYpJki0ik1b09NrzARYP7KIIi5Ih4ZinbYCosGFAoQa+01CksMXTfKvX5EZQVl0fIIcmLCmOSUuZ1aCuhchRiCutENzFQBeX3Ui0r5JT0RIXcXqt+y3x4gbWS5/oMiCd6nerm8DAQUTRakm74Qo5JV1TIDVYi81NqwJHrEsWx1mtS8JQEk/4tCMjC3ZMJgkLOSV9USKnTCFr6QAWWC8Qli3d07rquLgRVCszslkZLQoWQDVFh0IwI4mJitZCycBY6oKd9h4fFBTHBZzA9fogjgrF5sbwEwYBsiQq5d3rEWWznBfFyIYi7JDVIISCwriAotos0IRiLILRYJ0KFkT1RYTBQTdes9QPxF17UGsshRE1NQzT27t3rpISjLNAN4UMwVmYZCxVKdkWFiSouKjy50WvJsLWgThNQl3WIa995CjILQkiyLypMnOKSJNwCQsRE6CLkR1QYuCHr1q1zYi6mAdGkgWvDAWRxc4QuRv5ERYUDpTYZl3KBTBSCxBwsFoQuSr5FRQXCwivcl5pXExdqMFjcG0FwcETlCBH1rqTzwUFWTvVirdiosRgICLJIqIfBQ0REEHyZDFFB+/iJXeX8qCslehe8Jnc1fjUOIuIhCFYMg6hMJ6J/kvMmCEJEcMe+CJ3fYKkclbMpCEJElpDbThIxlflyNgVBiACslJXktpPkt9lORFfJWRUEwRJ4OlcT0XvkaXw9yVUbQRAEG+awoHhF5YirNiIsgiCYAAvlr9ntYbxLdEBYLkIBi5xSQRACeM01QlZ6N6kKKKgd6po1cIuGyNkVBAHLj7tZnu26kxEkKipDPQ9BELoOLCBaISlCRP8PVSZY/pWddNIAAAAASUVORK5CYII=";const d=o=>((0,r.dD)("data-v-d1e64cbe"),o=o(),(0,r.Cn)(),o),u=d((()=>(0,r._)("h1",null,[(0,r._)("img",{src:c,alt:""})],-1))),m={class:"has-text-centered"},p={class:"panel mt-5"},f=d((()=>(0,r._)("i",{class:"fas fa-tasks"},null,-1))),h=d((()=>(0,r._)("i",{class:"fas fa-project-diagram"},null,-1)));function v(o,a,e,t,n,i){const l=(0,r.up)("RouterLink");return(0,r.wg)(),(0,r.iD)("header",null,[u,(0,r._)("div",m,[(0,r._)("button",{class:"button",onClick:a[0]||(a[0]=(...a)=>o.alterarTema&&o.alterarTema(...a))},(0,s.zw)(o.textoBotao),1)]),(0,r._)("nav",p,[(0,r._)("ul",null,[(0,r._)("li",null,[(0,r.Wm)(l,{to:"/",class:"link"},{default:(0,r.w5)((()=>[f,(0,r.Uk)(" Tarefas ")])),_:1})]),(0,r._)("li",null,[(0,r.Wm)(l,{to:"/projetos",class:"link"},{default:(0,r.w5)((()=>[h,(0,r.Uk)(" Projetos ")])),_:1})])])])])}var A=(0,r.aZ)({name:"BarraLateral",emits:["aoTemaAlterado"],data(){return{modoEscuroAtivo:!1}},computed:{textoBotao(){return this.modoEscuroAtivo?"Desativar modo escuro":"Ativar modo escuro"}},methods:{alterarTema(){this.modoEscuroAtivo=!this.modoEscuroAtivo,this.$emit("aoTemaAlterado",this.modoEscuroAtivo)}}}),g=e(89);const E=(0,g.Z)(A,[["render",v],["__scopeId","data-v-d1e64cbe"]]);var C=E;const T={class:"notificacoes"},b={class:"message-header"},R={class:"message-body"};function I(o,a,e,t,n,i){return(0,r.wg)(),(0,r.iD)("div",T,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(o.notificacoes,(a=>((0,r.wg)(),(0,r.iD)("article",{class:(0,s.C_)(["message",o.contexto[a.tipo]]),key:a.id},[(0,r._)("div",b,(0,s.zw)(a.titulo),1),(0,r._)("div",R,(0,s.zw)(a.texto),1)],2)))),128))])}e(7658);var w=e(65);const F="ADICIONA_PROJETO",S="ALTERA_PROJETO",j="EXCLUIR_PROJETO",B="DEFINIR_PROJETOS",k="NOTIFICAR",x="DEFINIR_TAREFAS",U="ADICIONA_TAREFA",V="ALTERA_TAREFA",P="EXCLUIR_TAREFA";var W=e(4161);const L=W.Z.create({baseURL:"http://localhost:3000/"});var Q=L;const O="OBTER_PROJETOS",Y="CADASTRAR_PROJETO",y="ALTERAR_PROJETO",D="REMOVER_PROJETO",K="OBTER_TAREFAS",z="CADASTRAR_TAREFA",Z="ALTERAR_TAREFA",q="REMOVER_TAREFA",X={mutations:{[F](o,a){const e={id:(new Date).toISOString(),nome:a};o.projetos.push(e)},[S](o,a){const e=o.projetos.findIndex((o=>o.id==a.id));o.projetos[e]=a},[j](o,a){o.projetos=o.projetos.filter((o=>o.id!=a))},[B](o,a){o.projetos=a}},actions:{[O]({commit:o}){Q.get("projetos").then((a=>o(B,a.data)))},[Y](o,a){return Q.post("/projetos",{nome:a})},[y](o,a){return Q.put(`/projetos/${a.id}`,a)},[D]({commit:o},a){return Q["delete"](`/projetos/${a}`).then((()=>o(j,a)))}},getters:{projetos(o){return o.projetos}}},J={state:{tarefas:[]},mutations:{[x](o,a){o.tarefas=a},[U](o,a){o.tarefas.push(a)},[V](o,a){const e=o.tarefas.findIndex((o=>o.id==a.id));o.tarefas[e]=a}},actions:{[K]({commit:o},a){let e="tarefas";a&&(e+="?descricao="+a),Q.get(e).then((a=>o(x,a.data)))},[z]({commit:o},a){return Q.post("/tarefas",a).then((a=>o(U,a.data)))},[Z]({commit:o},a){return Q.put(`/tarefas/${a.id}`,a).then((()=>o(V,a)))},[q]({commit:o},a){return Q["delete"](`/tarefas/${a}`).then((()=>o(P,a)))}}},H=Symbol(),N=(0,w.MT)({state:{notificacoes:[],projeto:{projetos:[]},tarefa:{tarefas:[]}},mutations:{[k](o,a){a.id=(new Date).getTime(),o.notificacoes.push(a),setTimeout((()=>{o.notificacoes=o.notificacoes.filter((o=>o.id!=a.id))}),3e3)}},modules:{projeto:X,tarefa:J}});function G(){return(0,w.oR)(H)}var M;(function(o){o[o["SUCESSO"]=0]="SUCESSO",o[o["FALHA"]=1]="FALHA",o[o["ATENCAO"]=2]="ATENCAO"})(M||(M={}));var _=(0,r.aZ)({name:"NotificacoesVue",data(){return{contexto:{[M.SUCESSO]:"is-success",[M.ATENCAO]:"is-warning",[M.FALHA]:"is-danger"}}},setup(){const o=G();return{notificacoes:(0,r.Fl)((()=>o.state.notificacoes))}}});const $=(0,g.Z)(_,[["render",I],["__scopeId","data-v-490a944c"]]);var oo=$,ao=(0,r.aZ)({name:"App",components:{BarraLateral:C,Notificacoes:oo},data(){return{modoEscuroAtivo:!1}},methods:{trocarTema(o){this.modoEscuroAtivo=o}}});const eo=(0,g.Z)(ao,[["render",l]]);var to=eo,ro=e(2483);const so={class:"lista"},no=(0,r._)("span",{class:"has-text-weight-bold"},":(",-1),io={class:"field"},lo={class:"control has-icons-left"},co=(0,r._)("span",{class:"icon is-small is-left"},[(0,r._)("i",{class:"fas fa-search"})],-1),uo=(0,r._)("p",{class:"modal-card-title"},"Editando uma tarefa",-1),mo={class:"field"},po=(0,r._)("label",{for:"descricaoDaTarefa",class:"label"}," Descrição ",-1);function fo(o,a,e,s,n,i){const l=(0,r.up)("Formulario"),c=(0,r.up)("Box"),d=(0,r.up)("Tarefa"),u=(0,r.up)("Modal");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(l,{onAoSalvarTarefa:o.salvarTarefa},null,8,["onAoSalvarTarefa"]),(0,r._)("div",so,[o.semTarefas?((0,r.wg)(),(0,r.j4)(c,{key:0},{default:(0,r.w5)((()=>[(0,r.Uk)(" Você não está muito produtivo hoje "),no])),_:1})):(0,r.kq)("",!0),(0,r._)("div",io,[(0,r._)("p",lo,[(0,r.wy)((0,r._)("input",{class:"input",type:"text",placeholder:"Digite para filtrar","onUpdate:modelValue":a[0]||(a[0]=a=>o.filtro=a)},null,512),[[t.nr,o.filtro]]),co])]),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(o.tarefas,((a,e)=>((0,r.wg)(),(0,r.j4)(d,{tarefa:a,key:e,onAoTarefaClicada:o.selecionarTarefa},null,8,["tarefa","onAoTarefaClicada"])))),128)),(0,r.Wm)(u,{mostrar:o.tarefaSelecionada,"!":"null"},{cabecalho:(0,r.w5)((()=>[uo,(0,r._)("button",{onClick:a[1]||(a[1]=(...a)=>o.fecharModal&&o.fecharModal(...a)),class:"delete","aria-label":"close"})])),corpo:(0,r.w5)((()=>[(0,r._)("div",mo,[po,o.tarefaSelecionada?(0,r.wy)(((0,r.wg)(),(0,r.iD)("input",{key:0,type:"text",class:"input","onUpdate:modelValue":a[2]||(a[2]=a=>o.tarefaSelecionada.descricao=a),id:"descricaoDaTarefa"},null,512)),[[t.nr,o.tarefaSelecionada.descricao]]):(0,r.kq)("",!0)])])),rodape:(0,r.w5)((()=>[(0,r._)("button",{onClick:a[3]||(a[3]=(...a)=>o.alterarTarefa&&o.alterarTarefa(...a)),class:"button is-success"}," Salvar alterações "),(0,r._)("button",{onClick:a[4]||(a[4]=(...a)=>o.fecharModal&&o.fecharModal(...a)),class:"button"},"Cancelar")])),_:1},8,["mostrar"])])],64)}var ho=e(4870);const vo=o=>((0,r.dD)("data-v-14950514"),o=o(),(0,r.Cn)(),o),Ao={class:"box formulario"},go={class:"columns"},Eo={class:"column is-5",role:"form","aria-label":"Formulário para criação de uma nova tarefa"},Co={class:"column is-3"},To={class:"select"},bo=vo((()=>(0,r._)("option",{value:""},"Selecione o projeto",-1))),Ro=["value"],Io={class:"column"};function wo(o,a,e,n,i,l){const c=(0,r.up)("Temporizador");return(0,r.wg)(),(0,r.iD)("div",Ao,[(0,r._)("div",go,[(0,r._)("div",Eo,[(0,r.wy)((0,r._)("input",{type:"text",class:"input",placeholder:"Qual tarefa você deseja iniciar?","onUpdate:modelValue":a[0]||(a[0]=a=>o.descricao=a)},null,512),[[t.nr,o.descricao]])]),(0,r._)("div",Co,[(0,r._)("div",To,[(0,r.wy)((0,r._)("select",{"onUpdate:modelValue":a[1]||(a[1]=a=>o.idProjeto=a)},[bo,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(o.projetos,(o=>((0,r.wg)(),(0,r.iD)("option",{value:o.id,key:o.id},(0,s.zw)(o.nome),9,Ro)))),128))],512),[[t.bM,o.idProjeto]])])]),(0,r._)("div",Io,[(0,r.Wm)(c,{onAoTemporizadorFinalizado:o.finalizarTarefa},null,8,["onAoTemporizadorFinalizado"])])])])}const Fo={class:"is-flex is-align-items-center is-justify-content-space-between"},So=["disabled"],jo=(0,r._)("span",{class:"icon"},[(0,r._)("i",{class:"fas fa-play"})],-1),Bo=(0,r._)("span",null,"play",-1),ko=[jo,Bo],xo=["disabled"],Uo=(0,r._)("span",{class:"icon"},[(0,r._)("i",{class:"fas fa-stop"})],-1),Vo=(0,r._)("span",null,"stop",-1),Po=[Uo,Vo];function Wo(o,a,e,t,s,n){const i=(0,r.up)("Cronometro");return(0,r.wg)(),(0,r.iD)("div",Fo,[(0,r.Wm)(i,{"tempo-em-segundos":o.tempoEmSegundos},null,8,["tempo-em-segundos"]),(0,r._)("button",{class:"button",onClick:a[0]||(a[0]=(...a)=>o.iniciar&&o.iniciar(...a)),disabled:o.cronometroRodando},ko,8,So),(0,r._)("button",{class:"button",onClick:a[1]||(a[1]=(...a)=>o.finalizar&&o.finalizar(...a)),disabled:!o.cronometroRodando},Po,8,xo)])}const Lo={class:"display"};function Qo(o,a,e,t,n,i){return(0,r.wg)(),(0,r.iD)("section",null,[(0,r._)("strong",Lo,(0,s.zw)(o.tempoDecorrido),1)])}var Oo=(0,r.aZ)({name:"CronometroVue",props:{tempoEmSegundos:{type:Number,default:0}},computed:{tempoDecorrido(){return new Date(1e3*this.tempoEmSegundos).toISOString().substr(11,8)}}});const Yo=(0,g.Z)(Oo,[["render",Qo]]);var yo=Yo,Do=(0,r.aZ)({name:"TemporizadorVue",emits:["aoTemporizadorFinalizado"],components:{Cronometro:yo},data(){return{tempoEmSegundos:0,cronometro:0,cronometroRodando:!1}},methods:{iniciar(){this.cronometroRodando=!0,this.cronometro=setInterval((()=>{this.tempoEmSegundos+=1}),1e3)},finalizar(){this.cronometroRodando=!1,clearInterval(this.cronometro),this.$emit("aoTemporizadorFinalizado",this.tempoEmSegundos),this.tempoEmSegundos=0}}});const Ko=(0,g.Z)(Do,[["render",Wo]]);var zo=Ko,Zo=(0,r.aZ)({name:"FormularioVue",emits:["aoSalvarTarefa"],components:{Temporizador:zo},data(){return{descricao:"",idProjeto:""}},methods:{finalizarTarefa(o){this.$emit("aoSalvarTarefa",{duracaoEmSegundos:o,descricao:this.descricao,projeto:this.projetos.find((o=>o.id==this.idProjeto))}),this.descricao=""}},setup(){const o=(0,w.oR)(H);return{projetos:(0,r.Fl)((()=>o.state.projeto.projetos))}}});const qo=(0,g.Z)(Zo,[["render",wo],["__scopeId","data-v-14950514"]]);var Xo=qo;const Jo={class:"column is-4"},Ho={class:"column is 3"},No={class:"column"};function Go(o,a,e,t,n,i){const l=(0,r.up)("Cronometro"),c=(0,r.up)("Box");return(0,r.wg)(),(0,r.j4)(c,null,{default:(0,r.w5)((()=>[(0,r._)("div",{class:"columns clicavel",onClick:a[0]||(a[0]=(...a)=>o.tarefaClicada&&o.tarefaClicada(...a))},[(0,r._)("div",Jo,(0,s.zw)(o.tarefa.descricao||"Tarefa sem descrição"),1),(0,r._)("div",Ho,(0,s.zw)(o.tarefa.projeto?.nome||"N/D"),1),(0,r._)("div",No,[(0,r.Wm)(l,{"tempo-em-segundos":o.tarefa.duracaoEmSegundos},null,8,["tempo-em-segundos"])])])])),_:1})}const Mo={class:"box has-text-weight-bold"};function _o(o,a,e,t,s,n){return(0,r.wg)(),(0,r.iD)("div",Mo,[(0,r.WI)(o.$slots,"default",{},void 0,!0)])}var $o=(0,r.aZ)({name:"BoxVue"});const oa=(0,g.Z)($o,[["render",_o],["__scopeId","data-v-67d9b381"]]);var aa=oa,ea=(0,r.aZ)({name:"TarefaVue",emits:["aoTarefaClicada"],components:{Cronometro:yo,Box:aa},props:{tarefa:{type:Object,required:!0}},methods:{tarefaClicada(){this.$emit("aoTarefaClicada",this.tarefa)}}});const ta=(0,g.Z)(ea,[["render",Go],["__scopeId","data-v-892f9ab2"]]);var ra=ta;const sa=(0,r._)("div",{class:"modal-background"},null,-1),na={class:"modal-card"},ia={class:"modal-card-head"},la={class:"modal-card-body"},ca={class:"modal-card-foot"};function da(o,a,e,t,n,i){return o.mostrar?((0,r.wg)(),(0,r.iD)("div",{key:0,class:(0,s.C_)(["modal",{"is-active":o.mostrar}])},[sa,(0,r._)("div",na,[(0,r._)("header",ia,[(0,r.WI)(o.$slots,"cabecalho")]),(0,r._)("section",la,[(0,r.WI)(o.$slots,"corpo")]),(0,r._)("footer",ca,[(0,r.WI)(o.$slots,"rodape")])])],2)):(0,r.kq)("",!0)}var ua=(0,r.aZ)({name:"ModalVue",props:{mostrar:{required:!0}}});const ma=(0,g.Z)(ua,[["render",da]]);var pa=ma,fa=(0,r.aZ)({name:"App",components:{Formulario:Xo,Tarefa:ra,Box:aa,Modal:pa},data(){return{tarefaSelecionada:null}},methods:{salvarTarefa(o){this.store.dispatch(z,o)},selecionarTarefa(o){this.tarefaSelecionada=o},fecharModal(){this.tarefaSelecionada=null},alterarTarefa(){this.store.dispatch(Z,this.tarefaSelecionada).then((()=>this.fecharModal()))}},computed:{semTarefas(){return 0==this.tarefas.length}},setup(){const o=G();o.dispatch(K),o.dispatch(O);const a=(0,ho.iH)("");return(0,r.m0)((()=>{o.dispatch(K,a.value)})),{tarefas:(0,r.Fl)((()=>o.state.tarefa.tarefas)),store:o,filtro:a}}});const ha=(0,g.Z)(fa,[["render",fo]]);var va=ha;const Aa=o=>((0,r.dD)("data-v-3ce1ee60"),o=o(),(0,r.Cn)(),o),ga={class:"projetos"},Ea=Aa((()=>(0,r._)("h1",{class:"title"},"Projetos",-1)));function Ca(o,a,e,t,s,n){const i=(0,r.up)("RouterView");return(0,r.wg)(),(0,r.iD)("div",ga,[Ea,(0,r.Wm)(i)])}var Ta=(0,r.aZ)({name:"ProjetosView"});const ba=(0,g.Z)(Ta,[["render",Ca],["__scopeId","data-v-3ce1ee60"]]);var Ra=ba;const Ia={class:"field"},wa=(0,r._)("label",{for:"nomeDoProjeto",class:"label"}," Nome do Projeto ",-1),Fa=(0,r._)("div",{class:"field"},[(0,r._)("button",{class:"button",type:"submit"}," Salvar ")],-1);function Sa(o,a,e,s,n,i){return(0,r.wg)(),(0,r.iD)("section",null,[(0,r._)("form",{onSubmit:a[1]||(a[1]=(0,t.iM)(((...a)=>o.salvar&&o.salvar(...a)),["prevent"]))},[(0,r._)("div",Ia,[wa,(0,r.wy)((0,r._)("input",{type:"text",class:"input","onUpdate:modelValue":a[0]||(a[0]=a=>o.nomeDoProjeto=a),id:"nomeDoProjeto"},null,512),[[t.nr,o.nomeDoProjeto]])]),Fa],32)])}var ja=()=>{const o=(o,a,e)=>{N.commit(k,{titulo:a,texto:e,tipo:o})};return{notificar:o}},Ba=(0,r.aZ)({name:"FormularioView",props:{id:{type:String}},mounted(){if(this.id){const o=this.store.state.projeto.projetos.find((o=>o.id==this.id));this.nomeDoProjeto=o?.nome||""}},data(){return{nomeDoProjeto:""}},methods:{salvar(){this.id?this.store.dispatch(y,{id:this.id,nome:this.nomeDoProjeto}).then((()=>this.lidarComSucesso())):this.store.dispatch(Y,this.nomeDoProjeto).then((()=>this.lidarComSucesso()))},lidarComSucesso(){this.nomeDoProjeto="",this.notificar(M.SUCESSO,"Excelente","Pronto! Seu projeto foi cadastrado com sucesso ;)"),this.$router.push("/projetos")}},setup(){const o=G(),{notificar:a}=ja();return{store:o,notificar:a}}});const ka=(0,g.Z)(Ba,[["render",Sa]]);var xa=ka;const Ua=(0,r._)("span",{class:"icon is-small"},[(0,r._)("i",{class:"fas fa-plus"})],-1),Va=(0,r._)("span",null,"Novo Projeto",-1),Pa={class:"table is-fullwidth"},Wa=(0,r._)("thead",null,[(0,r._)("tr",null,[(0,r._)("th",null,"ID"),(0,r._)("th",null,"Nome"),(0,r._)("th",null,"Ações")])],-1),La=(0,r._)("span",{class:"icon is-small"},[(0,r._)("i",{class:"fas fa-pencil-alt"})],-1),Qa=["onClick"],Oa=(0,r._)("span",{class:"icon is-small"},[(0,r._)("i",{class:"fas fa-trash"})],-1),Ya=[Oa];function ya(o,a,e,t,n,i){const l=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("section",null,[(0,r.Wm)(l,{to:"/projetos/novo",class:"button"},{default:(0,r.w5)((()=>[Ua,Va])),_:1}),(0,r._)("table",Pa,[Wa,(0,r._)("tbody",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(o.projetos,(a=>((0,r.wg)(),(0,r.iD)("tr",{key:a.id},[(0,r._)("td",null,(0,s.zw)(a.id),1),(0,r._)("td",null,(0,s.zw)(a.nome),1),(0,r._)("td",null,[(0,r.Wm)(l,{to:`/projetos/${a.id}`,class:"button"},{default:(0,r.w5)((()=>[La])),_:2},1032,["to"]),(0,r._)("button",{class:"button ml-2 is-danger",onClick:e=>o.excluir(a.id)},Ya,8,Qa)])])))),128))])])])}var Da=(0,r.aZ)({name:"ListaView",methods:{excluir(o){this.store.dispatch(D,o)}},setup(){const o=G();return o.dispatch(O),{projetos:(0,r.Fl)((()=>o.state.projeto.projetos)),store:o}}});const Ka=(0,g.Z)(Da,[["render",ya]]);var za=Ka;const Za=[{path:"/",name:"Tarefas",component:va},{path:"/projetos",component:Ra,children:[{path:"",name:"Projetos",component:za},{path:"novo",name:"Novo projeto",component:xa},{path:":id",name:"Editar projeto",component:xa,props:!0}]}],qa=(0,ro.p7)({history:(0,ro.r5)(),routes:Za});var Xa=qa;(0,t.ri)(to).use(Xa).use(N,H).mount("#app")}},a={};function e(t){var r=a[t];if(void 0!==r)return r.exports;var s=a[t]={exports:{}};return o[t](s,s.exports,e),s.exports}e.m=o,function(){var o=[];e.O=function(a,t,r,s){if(!t){var n=1/0;for(d=0;d<o.length;d++){t=o[d][0],r=o[d][1],s=o[d][2];for(var i=!0,l=0;l<t.length;l++)(!1&s||n>=s)&&Object.keys(e.O).every((function(o){return e.O[o](t[l])}))?t.splice(l--,1):(i=!1,s<n&&(n=s));if(i){o.splice(d--,1);var c=r();void 0!==c&&(a=c)}}return a}s=s||0;for(var d=o.length;d>0&&o[d-1][2]>s;d--)o[d]=o[d-1];o[d]=[t,r,s]}}(),function(){e.n=function(o){var a=o&&o.__esModule?function(){return o["default"]}:function(){return o};return e.d(a,{a:a}),a}}(),function(){e.d=function(o,a){for(var t in a)e.o(a,t)&&!e.o(o,t)&&Object.defineProperty(o,t,{enumerable:!0,get:a[t]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(o){if("object"===typeof window)return window}}()}(),function(){e.o=function(o,a){return Object.prototype.hasOwnProperty.call(o,a)}}(),function(){var o={143:0};e.O.j=function(a){return 0===o[a]};var a=function(a,t){var r,s,n=t[0],i=t[1],l=t[2],c=0;if(n.some((function(a){return 0!==o[a]}))){for(r in i)e.o(i,r)&&(e.m[r]=i[r]);if(l)var d=l(e)}for(a&&a(t);c<n.length;c++)s=n[c],e.o(o,s)&&o[s]&&o[s][0](),o[s]=0;return e.O(d)},t=self["webpackChunkalura_tracker"]=self["webpackChunkalura_tracker"]||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))}();var t=e.O(void 0,[998],(function(){return e(1465)}));t=e.O(t)})();
//# sourceMappingURL=app.545a64f9.js.map