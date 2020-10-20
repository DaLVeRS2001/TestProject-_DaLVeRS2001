let state = {
	profilePage: {
		postsData: [
			{
				id: 1,
				message: "Hi buddy, How are u?",
				likeCount: 24,
				src: "https://pbs.twimg.com/profile_images/460533834547601408/5bbvogtJ.jpeg"
			},
			{
				id: 2,
				message: "it's my first post",
				likeCount: 12,
				src: "https://im0-tub-ru.yandex.net/i?id=e11274ee0fbeaccac0618cce6beeebac&n=13&exp=1"
			}
			// {id: 3, message: "YO", likeCount: 5, src: ''},
			// {id: 4, message: "i'm here", likeCount: 4, src: ''},
			// {id: 5, message: "nice to see you again bro", likeCount: 55, src: ''},
		]
	},

	messagePage: {
		messagesData: [
			{id: 1, message: "Hi"},
			{id: 2, message: "Hi, whats up"},
			{id: 3, message: "YO"},
			{id: 4, message: "Vlad"},
			{id: 5, message: "nice to see you again bro"},
		],
		dialogsData: [
			{id: 1, name: "Vlad", src: "https://clck.ru/RVA8w"},
			{id: 2, name: "Katia", src: "https://clck.ru/RVA8w"},
			{id: 3, name: "Egor", src: "https://clck.ru/RVA8w"},
			{id: 4, name: "Maks", src: "https://clck.ru/RVA8w"},
			{id: 5, name: "Alex", src: "https://clck.ru/RVA8w"},
			{id: 6, name: "Valera", src: "https://clck.ru/RVA8w"}
		]
	},


	navPage: {
		friendsData: [
			{id: 1, avaSrc: 'https://clck.ru/RVA8w', name: 'Vlad'},
			{id: 2, avaSrc: 'https://clck.ru/RVA8w', name: 'Katia'},
			{id: 3, avaSrc: 'https://clck.ru/RVA8w', name: 'Egor'},
			{id: 4, avaSrc: 'https://clck.ru/RVA8w', name: 'Katia'},
			{id: 5, avaSrc: 'https://clck.ru/RVA8w', name: 'Katia'},
			{id: 6, avaSrc: 'https://clck.ru/RVA8w', name: 'Katia'},
		],
		friendsListLink: [
			'/228'
		]
	}
}


export default state