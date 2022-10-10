const { Colors } = require('discord.js');

const config = {
	ownerID: ['608660711207600128'],
	token: 'MTAyNDcxNjQ2NTc2NjY2MjE0NA.Gxgrzz.C4Je62IwK9SMQnk4gurLCY3V96qjsnGJ5tCAXw',
	// For looking up Twitch, Fortnite, Steam accounts
	api_keys: {
		// https://dev.twitch.tv/console/apps
		twitch: {
			clientID: '',
			clientSecret: '',
		},
		// https://fortnitetracker.com/site-api
		fortnite: '',
		// https://steamcommunity.com/dev
		steam: '',
		// https://developer.spotify.com/documentation/web-api/
		spotify: {
			iD: 'e6f84fbec2b44a77bf35a20c5ffa54b8',
			secret: '498f461b962443cfaf9539c610e2ea81',
		},
		// Your Ubisoft email and password (You don't need to enable anything)
		rainbow: {
			email: '',
			password: '',
		},
		// https://genius.com/developers
		genius: 'Dza2bzs2Z_9apiZEcX65MBV0gonNsTNv3CwWAoOkChvA5ayhpnnm5ObhpuADMpOL',
		// https://api.amethyste.moe/
		amethyste: '36d73cb74451722a36fe5321526fa29649bdc850444fea8269e6f21276ece44925ae934dd478a803886f53420dfe3e3498f7dc3d0380e278a60d2f50cdc92e72',
	},
	// add plugins/commands here if you don't want them loaded in the bot.
	disabledCommands: [],
	disabledPlugins: [],
	websiteURL: '',
	// your support server
	SupportServer: {
		// Link to your support server
		link: 'https://discord.gg/Kked52JrFg',
		// Your support's server ID
		GuildID: '1023975911097389157',
		// This for using the suggestion command on your server
		ModRole: '1024282645087146044',
		// What channel to post the suggestions
		SuggestionChannel: '1028943421899034664',
		// Where the bot will send Guild join/leave messages to
		GuildChannel: '1028942611089723402',
		// Where rate limits will be sent to, for investigation
		rateLimitChannelID: '1028942611089723402',
	},
	API: {
		port: 3000,
		secure: true,
		token: '',
	},
	LavalinkNodes: [
		{ host: 'kartadharta.xyz', port:  3000, password: 'kdlavalink' },
	],
	// URL to mongodb
	MongoDBURl: 'mongodb+srv://Jazzy:jazzy098@cluster0.dq3sr.mongodb.net/?retryWrites=true&w=majority',
	// embed colour
	embedColor: Colors.Default,
	// This will spam your console if you enable this but will help with bug fixing
	debug: false,
};

module.exports = config;
