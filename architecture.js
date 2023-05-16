const execSync = require('child_process').execSync;

const slug = process.env.npm_config_slug;
if(!slug)
{
    console.error("***Manca lo slug!***");
    return;
}

console.log("Hello", slug);

execSync('git checkout master');
execSync('git pull');
execSync('git checkout -b archi-note/'+slug);
execSync('hugo new --kind archi architecture-note/'+slug);
