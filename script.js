//a . Get all the countries from the Asia continent /region using the Filter function
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3/all",true)
request.send()
request.onload=function(){
    var data = request.response
    var result = JSON.parse(data)
    var res = result.filter((ele)=>ele.region)
    var res1 = result.map((ele)=>ele.name.common)
    console.log(res1);
}
//output
// (250) ['Hungary', 'Aruba', 'Western Sahara', 'Afghanistan', 'Curaçao', 'Ecuador', 'Solomon Islands', 'Mauritius', 'Botswana', 'Tuvalu', 'Grenada', 'Iran', 'Saint Martin', 'Chile', 'Lithuania', 'Suriname', 'Kyrgyzstan', 'São Tomé and Príncipe', 'Paraguay', 'Norway', 'Monaco', 'Pitcairn Islands', 'Saudi Arabia', 'Barbados', 'British Indian Ocean Territory', 'Senegal', 'Puerto Rico', 'Cocos (Keeling) Islands', 'Vietnam', 'Slovakia', 'Trinidad and Tobago', 'Åland Islands', 'India', 'Panama', 'Guinea-Bissau', 'Latvia', 'Romania', 'Kiribati', 'British Virgin Islands', 'Samoa', 'Estonia', 'Brunei', 'Mexico', 'Czechia', 'Denmark', 'Sierra Leone', 'Bahamas', 'South Africa', 'Jamaica', 'Thailand', 'Ghana', 'Spain', 'Japan', 'France', 'Cyprus', 'Fiji', 'Martinique', 'Costa Rica', 'Netherlands', 'Vatican City', 'Bermuda', 'Iceland', 'Kuwait', 'Greenland', 'Morocco', 'North Macedonia', 'Malta', 'Qatar', 'Angola', 'Palestine', 'Namibia', 'Australia', 'Republic of the Congo', 'Saint Lucia', 'Cayman Islands', 'South Georgia', 'Guatemala', 'Turkey', 'Northern Mariana Islands', 'Cape Verde', 'Bahrain', 'Nigeria', 'Burkina Faso', 'Nepal', 'Kazakhstan', 'Lesotho', 'Lebanon', 'New Zealand', 'Christmas Island', 'Nicaragua', 'Tokelau', 'Singapore', 'Argentina', 'Armenia', 'Moldova', 'Colombia', 'South Korea', 'Tonga', 'United Kingdom', 'Rwanda', …]

//b . Get all the countries with a population of less than 2 lakhs using Filter function
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3/all",true)
request.send()
request.onload=function(){
    var data = request.response
    var result = JSON.parse(data)
    var res = result.filter((ele)=>ele.population<200000)
    var res1 = res.map((ele)=>ele.name.common)
    console.log(res1);
}
//output
// (62) ['Aruba', 'Curaçao', 'Tuvalu', 'Grenada', 'Saint Martin', 'Monaco', 'Pitcairn Islands', 'British Indian Ocean Territory', 'Cocos (Keeling) Islands', 'Åland Islands', 'Kiribati', 'British Virgin Islands', 'Samoa', 'Vatican City', 'Bermuda', 'Greenland', 'Saint Lucia', 'Cayman Islands', 'South Georgia', 'Northern Mariana Islands', 'Christmas Island', 'Tokelau', 'Tonga', 'Turks and Caicos Islands', 'Micronesia', 'San Marino', 'Isle of Man', 'Antarctica', 'Niue', 'Wallis and Futuna', 'American Samoa', 'Saint Pierre and Miquelon', 'Saint Kitts and Nevis', 'Seychelles', 'Marshall Islands', 'Guernsey', 'Gibraltar', 'Montserrat', 'Antigua and Barbuda', 'Bouvet Island', 'Svalbard and Jan Mayen', 'United States Minor Outlying Islands', 'Cook Islands', 'Saint Vincent and the Grenadines', 'Saint Helena, Ascension and Tristan da Cunha', 'Heard Island and McDonald Islands', 'Sint Maarten', 'Caribbean Netherlands', 'Andorra', 'Guam', 'Nauru', 'Norfolk Island', 'Anguilla', 'Palau', 'Dominica', 'Falkland Islands', 'French Southern and Antarctic Lands', 'Jersey', 'Faroe Islands', 'Saint Barthélemy', 'Liechtenstein', 'United States Virgin Islands']

// c .Print the following details name, capital, flag using forEach function
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3/all",true)
request.send()
request.onload=function(){
    var data = request.response
    var result = JSON.parse(data)
    var res = result.forEach((ele)=>{console.log(`${ele.name.common} ${ele.capital} ${ele.flag}`)})
}
// output
// Hungary Budapest 🇭🇺
// VM197:7 Aruba Oranjestad 🇦🇼
// VM197:7 Western Sahara El Aaiún 🇪🇭
// VM197:7 Afghanistan Kabul 🇦🇫
// VM197:7 Curaçao Willemstad 🇨🇼
// VM197:7 Ecuador Quito 🇪🇨
// VM197:7 Solomon Islands Honiara 🇸🇧
// VM197:7 Mauritius Port Louis 🇲🇺
// VM197:7 Botswana Gaborone 🇧🇼
// VM197:7 Tuvalu Funafuti 🇹🇻
// VM197:7 Grenada St. George's 🇬🇩
// VM197:7 Iran Tehran 🇮🇷
// VM197:7 Saint Martin Marigot 🇲🇫
// VM197:7 Chile Santiago 🇨🇱
// VM197:7 Lithuania Vilnius 🇱🇹
// VM197:7 Suriname Paramaribo 🇸🇷
// VM197:7 Kyrgyzstan Bishkek 🇰🇬
// VM197:7 São Tomé and Príncipe São Tomé 🇸🇹
// VM197:7 Paraguay Asunción 🇵🇾
// VM197:7 Norway Oslo 🇳🇴
// VM197:7 Monaco Monaco 🇲🇨
// VM197:7 Pitcairn Islands Adamstown 🇵🇳
// VM197:7 Saudi Arabia Riyadh 🇸🇦
// VM197:7 Barbados Bridgetown 🇧🇧
// VM197:7 British Indian Ocean Territory Diego Garcia 🇮🇴
// VM197:7 Senegal Dakar 🇸🇳
// VM197:7 Puerto Rico San Juan 🇵🇷
// VM197:7 Cocos (Keeling) Islands West Island 🇨🇨
// VM197:7 Vietnam Hanoi 🇻🇳
// VM197:7 Slovakia Bratislava 🇸🇰
// VM197:7 Trinidad and Tobago Port of Spain 🇹🇹
// VM197:7 Åland Islands Mariehamn 🇦🇽
// VM197:7 India New Delhi 🇮🇳
// VM197:7 Panama Panama City 🇵🇦
// VM197:7 Guinea-Bissau Bissau 🇬🇼
// VM197:7 Latvia Riga 🇱🇻
// VM197:7 Romania Bucharest 🇷🇴
// VM197:7 Kiribati South Tarawa 🇰🇮
// VM197:7 British Virgin Islands Road Town 🇻🇬
// VM197:7 Samoa Apia 🇼🇸
// VM197:7 Estonia Tallinn 🇪🇪
// VM197:7 Brunei Bandar Seri Begawan 🇧🇳
// VM197:7 Mexico Mexico City 🇲🇽
// VM197:7 Czechia Prague 🇨🇿
// VM197:7 Denmark Copenhagen 🇩🇰
// VM197:7 Sierra Leone Freetown 🇸🇱
// VM197:7 Bahamas Nassau 🇧🇸
// VM197:7 South Africa Pretoria,Bloemfontein,Cape Town 🇿🇦
// VM197:7 Jamaica Kingston 🇯🇲
// VM197:7 Thailand Bangkok 🇹🇭
// VM197:7 Ghana Accra 🇬🇭
// VM197:7 Spain Madrid 🇪🇸
// VM197:7 Japan Tokyo 🇯🇵
// VM197:7 France Paris 🇫🇷
// VM197:7 Cyprus Nicosia 🇨🇾
// VM197:7 Fiji Suva 🇫🇯
// VM197:7 Martinique Fort-de-France 🇲🇶
// VM197:7 Costa Rica San José 🇨🇷
// VM197:7 Netherlands Amsterdam 🇳🇱
// VM197:7 Vatican City Vatican City 🇻🇦
// VM197:7 Bermuda Hamilton 🇧🇲
// VM197:7 Iceland Reykjavik 🇮🇸
// VM197:7 Kuwait Kuwait City 🇰🇼
// VM197:7 Greenland Nuuk 🇬🇱
// VM197:7 Morocco Rabat 🇲🇦
// VM197:7 North Macedonia Skopje 🇲🇰
// VM197:7 Malta Valletta 🇲🇹
// VM197:7 Qatar Doha 🇶🇦
// VM197:7 Angola Luanda 🇦🇴
// VM197:7 Palestine Ramallah 🇵🇸
// VM197:7 Namibia Windhoek 🇳🇦
// VM197:7 Australia Canberra 🇦🇺
// VM197:7 Republic of the Congo Brazzaville 🇨🇬
// VM197:7 Saint Lucia Castries 🇱🇨
// VM197:7 Cayman Islands George Town 🇰🇾
// VM197:7 South Georgia King Edward Point 🇬🇸
// VM197:7 Guatemala Guatemala City 🇬🇹
// VM197:7 Turkey Ankara 🇹🇷
// VM197:7 Northern Mariana Islands Saipan 🇲🇵
// VM197:7 Cape Verde Praia 🇨🇻
// VM197:7 Bahrain Manama 🇧🇭
// VM197:7 Nigeria Abuja 🇳🇬
// VM197:7 Burkina Faso Ouagadougou 🇧🇫
// VM197:7 Nepal Kathmandu 🇳🇵
// VM197:7 Kazakhstan Nur-Sultan 🇰🇿
// VM197:7 Lesotho Maseru 🇱🇸
// VM197:7 Lebanon Beirut 🇱🇧
// VM197:7 New Zealand Wellington 🇳🇿
// VM197:7 Christmas Island Flying Fish Cove 🇨🇽
// VM197:7 Nicaragua Managua 🇳🇮
// VM197:7 Tokelau Fakaofo 🇹🇰
// VM197:7 Singapore Singapore 🇸🇬
// VM197:7 Argentina Buenos Aires 🇦🇷
// VM197:7 Armenia Yerevan 🇦🇲
// VM197:7 Moldova Chișinău 🇲🇩
// VM197:7 Colombia Bogotá 🇨🇴
// VM197:7 South Korea Seoul 🇰🇷
// VM197:7 Tonga Nuku'alofa 🇹🇴
// VM197:7 United Kingdom London 🇬🇧
// VM197:7 Rwanda Kigali 🇷🇼
// VM197:7 South Sudan Juba 🇸🇸
// VM197:7 DR Congo Kinshasa 🇨🇩
// VM197:7 Comoros Moroni 🇰🇲
// VM197:7 Mayotte Mamoudzou 🇾🇹
// VM197:7 Egypt Cairo 🇪🇬
// VM197:7 Jordan Amman 🇯🇴
// VM197:7 Russia Moscow 🇷🇺
// VM197:7 Hong Kong City of Victoria 🇭🇰
// VM197:7 Turks and Caicos Islands Cockburn Town 🇹🇨
// VM197:7 Micronesia Palikir 🇫🇲
// VM197:7 Gabon Libreville 🇬🇦
// VM197:7 Turkmenistan Ashgabat 🇹🇲
// VM197:7 Eritrea Asmara 🇪🇷
// VM197:7 Papua New Guinea Port Moresby 🇵🇬
// VM197:7 Pakistan Islamabad 🇵🇰
// VM197:7 San Marino City of San Marino 🇸🇲
// VM197:7 Tanzania Dodoma 🇹🇿
// VM197:7 Kenya Nairobi 🇰🇪
// VM197:7 Gambia Banjul 🇬🇲
// VM197:7 Libya Tripoli 🇱🇾
// VM197:7 Togo Lomé 🇹🇬
// VM197:7 Isle of Man Douglas 🇮🇲
// VM197:7 Cuba Havana 🇨🇺
// VM197:7 Belarus Minsk 🇧🇾
// VM197:7 Tajikistan Dushanbe 🇹🇯
// VM197:7 Iraq Baghdad 🇮🇶
// VM197:7 Yemen Sana'a 🇾🇪
// VM197:7 Oman Muscat 🇴🇲
// VM197:7 Slovenia Ljubljana 🇸🇮
// VM197:7 Mozambique Maputo 🇲🇿
// VM197:7 Austria Vienna 🇦🇹
// VM197:7 Antarctica undefined 🇦🇶
// VM197:7 Guyana Georgetown 🇬🇾
// VM197:7 Niue Alofi 🇳🇺
// VM197:7 Wallis and Futuna Mata-Utu 🇼🇫
// VM197:7 Albania Tirana 🇦🇱
// VM197:7 Burundi Gitega 🇧🇮
// VM197:7 Bolivia Sucre 🇧🇴
// VM197:7 American Samoa Pago Pago 🇦🇸
// VM197:7 Haiti Port-au-Prince 🇭🇹
// VM197:7 Algeria Algiers 🇩🇿
// VM197:7 Saint Pierre and Miquelon Saint-Pierre 🇵🇲
// VM197:7 Ethiopia Addis Ababa 🇪🇹
// VM197:7 Saint Kitts and Nevis Basseterre 🇰🇳
// VM197:7 Seychelles Victoria 🇸🇨
// VM197:7 Marshall Islands Majuro 🇲🇭
// VM197:7 Timor-Leste Dili 🇹🇱
// VM197:7 Madagascar Antananarivo 🇲🇬
// VM197:7 Equatorial Guinea Malabo 🇬🇶
// VM197:7 Serbia Belgrade 🇷🇸
// VM197:7 Canada Ottawa 🇨🇦
// VM197:7 Cambodia Phnom Penh 🇰🇭
// VM197:7 Guernsey St. Peter Port 🇬🇬
// VM197:7 Gibraltar Gibraltar 🇬🇮
// VM197:7 Montserrat Plymouth 🇲🇸
// VM197:7 Somalia Mogadishu 🇸🇴
// VM197:7 China Beijing 🇨🇳
// VM197:7 Switzerland Bern 🇨🇭
// VM197:7 Bosnia and Herzegovina Sarajevo 🇧🇦
// VM197:7 Tunisia Tunis 🇹🇳
// VM197:7 Luxembourg Luxembourg 🇱🇺
// VM197:7 Taiwan Taipei 🇹🇼
// VM197:7 Brazil Brasília 🇧🇷
// VM197:7 Antigua and Barbuda Saint John's 🇦🇬
// VM197:7 Bouvet Island undefined 🇧🇻
// VM197:7 Svalbard and Jan Mayen Longyearbyen 🇸🇯
// VM197:7 United States Minor Outlying Islands undefined 🇺🇲
// VM197:7 El Salvador San Salvador 🇸🇻
// VM197:7 Peru Lima 🇵🇪
// VM197:7 Liberia Monrovia 🇱🇷
// VM197:7 Uganda Kampala 🇺🇬
// VM197:7 Cook Islands Avarua 🇨🇰
// VM197:7 Portugal Lisbon 🇵🇹
// VM197:7 Saint Vincent and the Grenadines Kingstown 🇻🇨
// VM197:7 Saint Helena, Ascension and Tristan da Cunha Jamestown 🇸🇭
// VM197:7 Heard Island and McDonald Islands undefined 🇭🇲
// VM197:7 Sint Maarten Philipsburg 🇸🇽
// VM197:7 French Polynesia Papeetē 🇵🇫
// VM197:7 Caribbean Netherlands Kralendijk undefined
// VM197:7 Germany Berlin 🇩🇪
// VM197:7 Zimbabwe Harare 🇿🇼
// VM197:7 Andorra Andorra la Vella 🇦🇩
// VM197:7 Guam Hagåtña 🇬🇺
// VM197:7 Syria Damascus 🇸🇾
// VM197:7 Mali Bamako 🇲🇱
// VM197:7 Djibouti Djibouti 🇩🇯
// VM197:7 Bulgaria Sofia 🇧🇬
// VM197:7 Guinea Conakry 🇬🇳
// VM197:7 Réunion Saint-Denis 🇷🇪
// VM197:7 Cameroon Yaoundé 🇨🇲
// VM197:7 United States Washington, D.C. 🇺🇸
// VM197:7 Eswatini Mbabane 🇸🇿
// VM197:7 Nauru Yaren 🇳🇷
// VM197:7 North Korea Pyongyang 🇰🇵
// VM197:7 French Guiana Cayenne 🇬🇫
// VM197:7 Sri Lanka Sri Jayawardenepura Kotte 🇱🇰
// VM197:7 Venezuela Caracas 🇻🇪
// VM197:7 Malawi Lilongwe 🇲🇼
// VM197:7 Georgia Tbilisi 🇬🇪
// VM197:7 Croatia Zagreb 🇭🇷
// VM197:7 Ireland Dublin 🇮🇪
// VM197:7 Niger Niamey 🇳🇪
// VM197:7 Norfolk Island Kingston 🇳🇫
// VM197:7 Chad N'Djamena 🇹🇩
// VM197:7 Macau undefined 🇲🇴
// VM197:7 Anguilla The Valley 🇦🇮
// VM197:7 Malaysia Kuala Lumpur 🇲🇾
// VM197:7 Palau Ngerulmud 🇵🇼
// VM197:7 Mongolia Ulan Bator 🇲🇳
// VM197:7 Azerbaijan Baku 🇦🇿
// VM197:7 New Caledonia Nouméa 🇳🇨
// VM197:7 Honduras Tegucigalpa 🇭🇳
// VM197:7 Dominica Roseau 🇩🇲
// VM197:7 Kosovo Pristina 🇽🇰
// VM197:7 Myanmar Naypyidaw 🇲🇲
// VM197:7 Falkland Islands Stanley 🇫🇰
// VM197:7 Uruguay Montevideo 🇺🇾
// VM197:7 Belize Belmopan 🇧🇿
// VM197:7 Finland Helsinki 🇫🇮
// VM197:7 Indonesia Jakarta 🇮🇩
// VM197:7 Italy Rome 🇮🇹
// VM197:7 French Southern and Antarctic Lands Port-aux-Français 🇹🇫
// VM197:7 Belgium Brussels 🇧🇪
// VM197:7 Jersey Saint Helier 🇯🇪
// VM197:7 Uzbekistan Tashkent 🇺🇿
// VM197:7 Ukraine Kyiv 🇺🇦
// VM197:7 Faroe Islands Tórshavn 🇫🇴
// VM197:7 Bhutan Thimphu 🇧🇹
// VM197:7 Sweden Stockholm 🇸🇪
// VM197:7 Israel Jerusalem 🇮🇱
// VM197:7 Vanuatu Port Vila 🇻🇺
// VM197:7 Montenegro Podgorica 🇲🇪
// VM197:7 Greece Athens 🇬🇷
// VM197:7 United Arab Emirates Abu Dhabi 🇦🇪
// VM197:7 Philippines Manila 🇵🇭
// VM197:7 Mauritania Nouakchott 🇲🇷
// VM197:7 Bangladesh Dhaka 🇧🇩
// VM197:7 Saint Barthélemy Gustavia 🇧🇱
// VM197:7 Central African Republic Bangui 🇨🇫
// VM197:7 Poland Warsaw 🇵🇱
// VM197:7 Laos Vientiane 🇱🇦
// VM197:7 Ivory Coast Yamoussoukro 🇨🇮
// VM197:7 Dominican Republic Santo Domingo 🇩🇴
// VM197:7 Guadeloupe Basse-Terre 🇬🇵
// VM197:7 Benin Porto-Novo 🇧🇯
// VM197:7 Liechtenstein Vaduz 🇱🇮
// VM197:7 Maldives Malé 🇲🇻
// VM197:7 Sudan Khartoum 🇸🇩
// VM197:7 United States Virgin Islands Charlotte Amalie 🇻🇮
// VM197:7 Zambia Lusaka 🇿🇲

// d . Print the total population of countries using reduce function

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3/all",true)
request.send()
request.onload=function(){
    var data = request.response
    var result = JSON.parse(data)
    var res = result.reduce((acc,cv)=>acc+cv.population,0)
    console.log(res)
}
// output:
// 7842779650
//e .Print the country which uses US Dollars as currency.

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all",true)
request.send()
request.onload=function(){
    var data = request.response
    var result = JSON.parse(data)
   var res = result.filter((ele)=>{
    for (let key in ele.currencies){
        if(ele.currencies[key].code==="USD"){
            console.log(ele.name)
        }
    }
   })
}
//output
// American Samoa
// VM1453:10 Bonaire, Sint Eustatius and Saba
// VM1453:10 British Indian Ocean Territory
// VM1453:10 Virgin Islands (British)
// VM1453:10 Virgin Islands (U.S.)
// VM1453:10 Cambodia
// VM1453:10 Ecuador
// VM1453:10 El Salvador
// VM1453:10 Guam
// VM1453:10 Marshall Islands
// VM1453:10 Micronesia (Federated States of)
// VM1453:10 Northern Mariana Islands
// VM1453:10 Palau
// VM1453:10 Panama
// VM1453:10 Puerto Rico
// VM1453:10 Timor-Leste
// VM1453:10 Turks and Caicos Islands
// VM1453:10 United States of America