const axios = require('axios').default;
${makerAper()}${maker()}${rantingAper()}${ranting()}${actualAper()}${actual()}${otherAper()}${other()}
// const dats = [];
// const url = 'http://localhost:3000/items';
// const itemName = [
//     'Станок для заточки цепей',
//     'Сетевой шуруповерт',
//     'Стабилизатор напряжения',
//     'Резчик швов',
//     'Электрическая пушка',
//     'Станок камнерезный станок камнерезный',
//     'Фрезерная машина',
//     'Бензоножницы',
//     'Алмазный диск (круг)',
//     'Электрический рубанок'];

// const itemArt = ['1129973', '1129973', '1129973', '1129973', '1129973', '1129973', '1129973', '1129973', '1129973', '1129973'];
// const itemMod = ['1129973', '1129973', '1129973', '1129973', '1129973', '1129973', '1129973', '1129973', '1129973', '1129973'];
// const quantity = ['15', '15', '15', '15', '15', '15', '15', '15', '15', '15'];

// const itemPrice = ['2 441', '2362', '7185', '93200', '3007', '265 590', '3849', '44700', '1680', '5129'];
// const itemNameMod = ['HUTER ECS-100', 'Ресанта СШ-550-2',
//     'РЕСАНТА АСН-600/1-И', 'DIAM JRK-500/13.0L 630058',
//     'РЕСАНТА ТЭПК-3000K', 'Nuova Battipav SUPREME ',
//     'Ресанта ФМ-1300Э', 'Echo HCR-165ES', 'DIAM Master Line',
//     'Вихрь Р-82СТ 72/5/3'];

//     for (let i = 0; i < itemName.length; i++) {
//         const item = {
//             id: i + 1,
//             name: itemName[i],
//             art: itemNameMod[i],
//             price: itemPrice[i],
//             itemArt: itemArt[i],
//             itemMod: itemMod[i],
//             img: `../assets/product-item/${[i]}.png`,
//             sale: false,
//             news: false,
//             availability: true,
//             quantity: quantity[i]}
//         axios.post(url, item )
//             .then(function (response) {
//             console.log(response);
//         })
//             .catch(function (error) {
//             console.log(error);
//         });

//     };

// const selectMenu = {
//     name: 'Каталог',
//     children: [ ]
// }

// const selectMenuItems = ['Аккумуляторы', 'Блоки контроля', 'Генераторы', 'Климатическая техника', 'Отопление', 'Перфораторы', 'Провода', 'Люстры', 'Аккумуляторы', 'Аккумуляторы']

// for (let i = 0; i < selectMenuItems.length; i++) {
//     const item = {
//         name: selectMenuItems[i],
//         children: [
//             {
//                 name: 'Подкатегория',
//                 children: [{ name: 'Подкатегория' }, { name: 'Подкатегория' }]
//             },
//             {
//                 name: 'Подкатегория',
//                 children: [{ name: 'Подкатегория' }, { name: 'Подкатегория' }]
//             },
//             {
//                 name: 'Подкатегория',
//                 children: [{ name: 'Подкатегория' }, { name: 'Подкатегория' }]
//             },
//             {
//                 name: 'Подкатегория',
//                 children: [{ name: 'Подкатегория' }, { name: 'Подкатегория' }]
//             },
//             {
//                 name: 'Подкатегория',
//                 children: [{ name: 'Подкатегория' }, { name: 'Подкатегория' }]
//             },
//             {
//                 name: 'Подкатегория',
//                 children: [{ name: 'Подкатегория' }, { name: 'Подкатегория' }]
//             },{
//                 name: 'Подкатегория',
//                 children: [{ name: 'Подкатегория' }, { name: 'Подкатегория' }]
//             },
//             {
//                 name: 'Подкатегория',
//                 children: [{ name: 'Подкатегория' }, { name: 'Подкатегория' }]
//             }

//         ]
//     }
//     selectMenu.children.push(item)
// }

// axios.post('http://localhost:3000/select_menu', selectMenu).then(function (response) {
//         console.log(response.data);
//     })
//     .catch(function (error) {
//         console.log(error)
//     })
// const name = ['Электро-Бензо инструмент', 'Сильнее Снегопада', 'FUBAG ГЕНЕРАТОРЫ'];
// const slogan  = ['FUBAG предлагает широкий набор опций для увеличения функциональности и мобильности генераторов', 'большой выбори хорошие цены', 'Большой выбор снегоуборочных машин. Качественные устройства для любого бюджета']

// for (let i = 0; i < name.length; i++) {
//     const item = {
//         title: name[i],
//         slogan: slogan[i]
//     }
//     axios.post('http://localhost:3000/slader', item).then(response => {
//         console.log(response.data);
//     })
// }
