const execSync = require('child_process').execSync;

const slug = process.env.npm_config_slug;
if(!slug)
{
    console.error("***Manca lo slug!***");
    return;
}

console.table({
    "tipo" : "How to?",
    "slug" : slug
});


execSync('git checkout master');
execSync('git pull');
execSync('hugo new --kind how-to how-to/'+slug);
