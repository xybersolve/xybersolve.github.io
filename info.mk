DEFAULT := "\e[1;39m"
RED := "\e[1;31m"
GREEN := "\e[1;32m"
YELLOW :="\e[1;33m"
BLUE := "\e[1;34m"
LIGHTGRAY := "\e[1;37m"
DARKGRAY := "\e[1;90m"
LIGHTRED := "\e[1;91m"
LIGHTGREEN := "\e[1;92m"
LIGHTYELLOW := "\e[1;93m"

# Extended colors
ORANGE := "\e[38;5;202m"
TAN := "\e[38;5;136m"
LIGHTTAN := "\e[38;5;222m"

RESET := "\e[0m"

INFO := @bash -c '\
	printf $(YELLOW); \
	echo "=> $$1"; \
	printf $(RESET)' BLANK

NOTE := @bash -c '\
	printf $(ORANGE); \
	echo "=> $$1"; \
	printf $(RESET)' BLANK

SUCCESS := @bash -c '\
	printf $(LIGHTGREEN); \
	echo "=> $$1"; \
	printf $(RESET)' BLANK

FAILURE := @bash -c '\
	printf $(LIGHTRED); \
	echo "=> $$1"; \
	printf $(RESET)' BLANK
