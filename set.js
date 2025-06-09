

/*Why does my code work? I don’t know. Why does my code break? I also don’t know.*/
/*I wrote a script to automate my job. Now I just sit back and watch Netflix while it runs.*/

const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
const path = require('path');

if (fs.existsSync('set.env')) {
    require('dotenv').config({ path: __dirname + '/set.env' });
}

const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined 
    ? databasePath 
    : process.env.DATABASE_URL;


const config = {
    session: process.env.SESSION_ID || 'ALPHA;;;H4sIAAAAAAAAA5VVW46rRhDdS/+O55qnAUsjBTAG/BhjG+NHlI82NNDm6aaxja9mB5GygSwk68kGsoUIe0Yz0n1kwlerKU6dqjp1+AryAldojBrQ/wpKgk+QovZImxKBPtDqMEQEdEAAKQR9UFvnEHNSvY7sRCT6cXxEE1oe140VOvpsH2nqcbGYOfiwEp7ASweU9T7F/k8An+fWUpdduNsfL2l2NDLszQZ4KdbrS7i1hz3aMIFZyu7gPH0CLy0ixATnkVHGKEMEpmPUOBCTz9E3zHwnEOWYTlLFdHjJvmbPUYRNsQynjXwZ62Yg+M8P3WFWfI7+0ir0raf5sfMgCVQkLJfEhX/SRFOJlZUbGPJK21kHlkte6Vc4ylFgByinmDaf7ntmG6SwTNc5q+IWXv3Cj20n3Fwn4YbUquJa/tw4bDNvvrE/R/yiBrC2Ym12Mc/LQz7WAovLw0E0elZPDJVm0mCKSTIyInz+SNwhb1pJ/k/fp1ZvZhf8wdtdljg0KeNMK+ZwURNpdmkkfZKrlphwzpYxp5+jP9qWdmHHwzLdM5mUzRNtf1zN7Qc1KZOT2h3b3qYYnmJZ3CTv9CGtyc9YNq4XzfPpUAy5DHWNYG/PFs41gAk7UPHcF9xdRVaBaA+04YlZqUtROw2d0FxVGe9m/uailTQKnvXdeKt5EnciJOeKwfnpVlGCGjsAffalAwiKcEUJpLjI2zuOFzoABqcl8gmit/aCblQp2HtQJvK+62jQ44S9vrLm3PY58bC/aZr9lT0ZJDXz4gl0QEkKH1UVCixc0YI0U1RVMEIV6P96m1RbNEFZQdEIB6APOF5QGJaVpR4j936pvpxjSCtYll9yREEHhKTIpgj0KalRB9y+GAqMJDJDRZVZkZVEWTNYbjjo8YymMYLM9toas3tWF2eoojArQZ+VBEXoKSIvvPzWATm60LuA2rJ5tgNCTCq6yusyLWDwpq63l9D3izqnyyb39faACOh/uEaU4jyq2tLqHBI/xiekt3WAfgjTCr10QIBO2EctHhhQ0uSPkjwXGna3i1ykj4arc9u6uMjvIfsgZGQoSY+KInGPguBLj/tAER5Zbo8kHjIMrwSgbcd9d9tvfiilreTK2abapznJl5PDwuHMuDmyaDcwbnK4awARFLx1eQ/9pC7dIkH5T3DtDbOSl9ORo0fnzXw+rQwy5blQcEj0AfeuLdD/+u6XehG0eEPXUESH00A7rTbPt3Loi8K3ikhvcbIkMbzICxzL8twtsL3vgBy2YECPIUlR9fefv//z1x8tm9dRtXkCRCFOqzbKXg8kODeMqb7MZNs0VSNS9UgF76N929X7LgiSebxa45XkDZlCnstCeQpyneV8J7/2rNRz5K27LOe9cCg8fQcE9EG82W9EORS0pRs95PgyYhN6nrEeI6xTK0sHIpNPUdXEJLaFinqTrXDWCi+MF0225ic9vN6OXI9JRofFjKlS7SGq5oWmPrXZ7hL7mIx017RrWTg6r7vhdZkopDoqNj5pDoTjmMuG3EEOAzauq0vAW/4gTq+jZ87V2HRdMSI8iNzuMrkOgqAsk/E2nR4WXXUQ3V3k5mLp698Dv+73XZAhRjczfp3Ff4/0fTmYl84HkFd//4EANTS7HKtLk87YRTB2DGc23vO7Mw3ygSg/xKLndk2DOa5m+QWBl3bryxTSsCAZ6AOYB6S4KYYUdbu9dh4WP0mmq5Gtze+lp7Ci6rsjfMdkWOke5ZCitGAVt10wBTWrW7E3alkuKaRvBgPU9jHDGrz8C5z3rOYECQAA', //paste your session here 
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Keith", //replace with your owner name
    NUMERO_OWNER: process.env.NUMERO_OWNER || "2349011876086",   //replace with your owner number  
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',    
    URL: process.env.URL || "https://files.catbox.moe/4h8lfw.jpg",    //replace with your image url                     
    ANTICALL_MSG: process.env.ANTICALL_MSG || 'call declined',             
    GURL: process.env.GURL || "https://github.com/Keithkeizzah", // replace with your url
    EVENTS: process.env.EVENTS || "yes",    
    BOT: process.env.BOT_NAME || 'ALPHA-MD', //replace with your bot name
    MODE: process.env.PUBLIC_MODE || "yes",              
    TIMEZONE: process.env.TIMEZONE || "Africa/Nairobi", //replace with your timezone 
    DP: process.env.STARTING_BOT_MESSAGE || "yes",
    ADM: process.env.ANTI_DELETE_MESSAGE || 'yes',
    
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? new Sequelize({
            dialect: 'sqlite',
            storage: DATABASE_URL,
            logging: false,
        })
        : new Sequelize(DATABASE_URL, {
            dialect: 'postgres',
            ssl: true,
            protocol: 'postgres',
            dialectOptions: {
                native: true,
                ssl: { 
                    require: true, 
                    rejectUnauthorized: false 
                },
            },
            logging: false,
        })
};


let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

module.exports = config;

//Why do we call it "open source" when it feels more like "open wounds"?🗿🗿

//Because sharing is caring... and crying is healing🗿🗿

