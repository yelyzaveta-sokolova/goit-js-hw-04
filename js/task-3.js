const profile = {
    username: "Jacob",
    playTime: 300,

    changeUsername: function (newName) {
        this.username = newName;
    },
    updatePlayTime: function (hours) {
        this.playTime = this.playTime + hours;
    },
    getInfo: function() {
         let result = `${this.username} has ${this.playTime} active hours!`
        return result;
  },
};

console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"