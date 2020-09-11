module.exports = {
    getMember: function(message, toFind = '') {
        toFind = toFind.toLowerCase();

        let target = message.guild.members.get(toFind);
        
        if (!target && message.mentions.members)
            target = message.mentions.members.first();

        if (!target && toFind) {
            target = message.guild.members.find(member => {
                return member.displayName.toLowerCase().includes(toFind) ||
                member.user.tag.toLowerCase().includes(toFind)
            });
        }
            
        if (!target) 
            target = message.member;
            
        return target;
    },

	formatDate: function (date) {
        return new Intl.DateTimeFormat('en-US').format(date);
    },
	formatTime: function (date) {
        return new Intl.DateTimeFormat('default', {
            hour: 'numeric',
            minute: 'numeric',
            timezone: 'America/Chicago',
        }).format(date);
},

    promptMessage: async function (message, author, time, validReactions) {
        // We put in the time as seconds, with this it's being transfered to MS
        time *= 1000;

        // For every emoji in the function parameters, react in the good order.
        for (const reaction of validReactions) await message.react(reaction);

        // Only allow reactions from the author, 
        // and the emoji must be in the array we provided.
        const filter = (reaction, user) => validReactions.includes(reaction.emoji.name) && user.id === author.id;

        // And ofcourse, await the reactions
        return message
            .awaitReactions(filter, { max: 1, time: time})
            .then(collected => collected.first() && collected.first().emoji.name);
    }
};






























module.exports = {
	// love.js
	getMember: function(message, toFind = '') {
		toFind = toFind.toLowerCase();

		let target = message.guild.members.cache.get(toFind);

		if (!target && message.mentions.members) {target = message.mentions.members.first();}

		if (!target && toFind) {
			target = message.guild.members.find(member => {
				return member.displayName.toLowerCase().includes(toFind) ||
                member.user.tag.toLowerCase().includes(toFind);
			});
		}

		if (!target) {target = message.member;}

		return target;
	},

	// rps.js
	promptMessage: async function(message, author, time, validReactions) {
		time *= 1000;

		for (const reaction of validReactions) await message.react(reaction);

		const filter = (reaction, user) => validReactions.includes(reaction.emoji.name) && user.id === author.id;

		return message
			.awaitReactions(filter, { max: 1, time: time })
			.then(collected => collected.first() && collected.first().emoji.name);
	},

	// botinfo.js
	formatBytes: function(a, b) {
		if (a == 0) return '0 Bytes';
		const c = 1024,
			d = b || 2,
			e = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
			f = Math.floor(Math.log(a) / Math.log(c));

		return parseFloat((a / Math.pow(c, f)).toFixed(d)) + ' ' + e[f];
	},

	// uptime.js, botinfo.js & channelinfo.js
	parseDur: function(ms) {
		let seconds = ms / 1000,
			days = parseInt(seconds / 86400);
		seconds = seconds % 86400;

		const hours = parseInt(seconds / 3600);
		seconds = seconds % 3600;

		const minutes = parseInt(seconds / 60);
		seconds = parseInt(seconds % 60);

		if (days) {
			return `${days} day, ${hours} hours, ${minutes} minutes`;
		}
		else if (hours) {
			return `${hours} hours, ${minutes} minutes, ${seconds} seconds`;
		}
		else if (minutes) {
			return `${minutes} minutes, ${seconds} seconds`;
		}
		return `${seconds} second(s)`;
	},

	// aliases.js
	capitalizeFirstLetter: function(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	},

	// memercount.js
	checkBots: function(guild) {
		let botCount = 0;
		guild.members.cache.forEach(member => {
			if (member.user.bot) botCount++;
		});
		return botCount;
	},

	// membercount.js
	checkMembers: function(guild) {
		let memberCount = 0;
		guild.members.cache.forEach(member => {
			if (!member.user.bot) memberCount++;
		});
		return memberCount;
	},

	// eval,js
	clean: function(string) {
		if (typeof text === 'string') {
			return string.replace(/`/g, '`' + String.fromCharCode(8203))
				.replace(/@/g, '@' + String.fromCharCode(8203));
		}
		else {
			return string;
		}
	},

	// color.js
	isHex: function(string) {
		let str = string;
		if(str.charAt(0) == '#') {
			str = str.slice(1);
		}
		return typeof str === 'string'
		&& str.length === 6
		&& !isNaN(Number('0x' + str));
	},

	// color.js
	stringToHex: function(string) {
		let hash = 0;
		for (let i = 0; i < string.length; i++) {
			hash = string.charCodeAt(i) + ((hash << 5) - hash);
		}
		let colour = '#';
		for (let i = 0; i < 3; i++) {
			const value = (hash >> (i * 8)) & 0xFF;
			colour += ('00' + value.toString(16)).substr(-2);
		}
		return colour;
	},

	// owoify.js
	owoify: function(text) {
		text = text.replace(/[lr]/g, 'w');
		text = text.replace(/u/g, 'uw');
		text = text.replace(/[LR]/g, 'W');
		text = text.replace(/U/g, 'UW');
		return text;
	},

	// spongebob.js
	alternateCaps: function(text) {
		let array = text.split('');
		let n = text.length;
		let out = '';
		let caps = false;

		for (let i = 0; i < n; i++) {
			if (!/[A-Za-z]/.test(array[i])) {
				out += array[i];
				continue;
			}

			if (caps) out += array[i].toUpperCase();
			else out += array[i].toLowerCase();

			caps = !caps;
		}
		return out;
	},

	// message.js
	is_url: function(string) {
		const regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
		if(regexp.test(string)) {
			return true;
		}
		else {
			return false;
		}
	},

	// message.js
	is_invite: function(string) {
		const regexp = /(https?:\/\/)?(www\.)?(discord\.(gg|io|me|li|club)|discordapp\.com\/invite|discord\.com\/invite)\/.+[a-z]/gi;
		if(regexp.test(string)) {
			return true;
		}
		else {
			return false;
		}
	},


};
