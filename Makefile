install:
	npm install

startgames: 
	npx babel-node src/bin/brain-games.js

starteven:
	npx babel-node src/bin/brain-even.js

startcalc:
	npx babel-node src/bin/brain-calc.js

publish: 
	npm publish --dry-run

lint:
	npx eslint .

	
