const sequelizeConfig = require(`${__dirname}/../src/config/sequelize.json`); // eslint-disable-line
const inquirer = require('inquirer');
const fs = require('fs');
const spawn = require('child_process').spawn;

// Seed options
(async () => {
  const dbOptions = Object.keys(sequelizeConfig)
    .map((dbKey) => {
      const name = [dbKey, sequelizeConfig[dbKey].dialect];
      if (sequelizeConfig[dbKey].host) { name.push(sequelizeConfig[dbKey].host); }
      if (sequelizeConfig[dbKey].username) { name.push(sequelizeConfig[dbKey].username); }
      return {
        value: dbKey,
        name: name.join(' - '),
      };
    });

  /*
    const prodValues = fs.readdirSync(`${__dirname}/../src/db/seeders/production`)
    .map(filename => ({ name: `Production - ${filename}`, value: filename }));
    prodValues.unshift('development');
  */

  /*
    const questions = await inquirer.prompt([
      {
        type: 'list',
        name: 'environment',
        message: 'Which database do you want to seed',
        choices: dbOptions,
      },
      {
        type: 'list',
        name: 'dataset',
        message: 'Which dataset do you want to seed',
        choices: prodValues,
      },
    ]);
    */

  /*
  const seedersPath = (questions.dataset === 'development') ?
    `${__dirname}/../src/db/seeders` :
    `${__dirname}/../src/db/seeders/production/${questions.dataset}`;
  */
  const seedersPath = `${__dirname}/../src/db/seeders`; 
  const undoCommand = [`${__dirname}/../node_modules/.bin/sequelize`, 'db:seed:undo:all', '--config', `${__dirname}/../src/config/sequelize.json`, '--env', 'development', '--seeders-path', seedersPath];
  const seedCommand = [`${__dirname}/../node_modules/.bin/sequelize`, 'db:seed:all', '--config', `${__dirname}/../src/config/sequelize.json`, '--env', 'development', '--seeders-path', seedersPath];

  /* eslint-disable */
  console.log(undoCommand.join(' '));
  let undoErrorCount = 0;

  const undoProcess = spawn(undoCommand.shift(), undoCommand);
  undoProcess.stdout.on('data', (data) => { console.log(`${data}`); });
  undoProcess.stderr.on('data', (data) => { console.error(`${data}`); undoErrorCount++; });
  undoProcess.stderr.on('close', (seedResult) => {
    if (undoErrorCount > 1) {
      console.error(`Not running seed as failure occurred while rolling back`);
      return;
    }
    console.log(seedCommand.join(' '));
    const seedProcess = spawn(seedCommand.shift(), seedCommand);
    seedProcess.stdout.on('data', (data) => { console.log(`${data}`); });
    seedProcess.stderr.on('data', (data) => { console.log(`stderr: ${data}`); });
  });
  /* eslint-enable */
})();
