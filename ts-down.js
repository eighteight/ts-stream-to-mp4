const { exec } = require("child_process");
const base = 'https://arteconcert-vh.akamaihd.net/i/am/concert/088000/088400/088454-001-F_0_VOF-STF_AMM-CONCERT-NEXT_XQ.1Gg8M1KqDlR.smil/segment';//1_1_av.ts'

load();

function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

async function load() {
    for (let step = 1; step < 595; step++) {
        exec(`wget -P 'videos' ${base}${step}_1_av.ts`, (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
                return;
            }
            console.log(`stdout: ${stdout}`);
        });
        await sleep(400);
    }
}
