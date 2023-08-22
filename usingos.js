const os=require('os');

console.log (os.platform()); //gives OS platform
console.log(os.arch()); //gives CPU architecture
console.log(os.cpus()); //# of CPU cores
console.log(os.homedir()); //home directory of current user