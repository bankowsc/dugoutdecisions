const teams = [
    // ==================== UCL ====================

    // ---------- ENGLAND ----------
    { name: "Arsenal", sport: "UCL", conference: "England", division: "Premier League", history: "432000000111111123214" },
    { name: "Aston Villa", sport: "UCL", conference: "England", division: "Premier League", history: "020000000000000000000" },
    { name: "Chelsea", sport: "UCL", conference: "England", division: "Premier League", history: "100225101011315213431" },
    { name: "Leicester City", sport: "UCL", conference: "England", division: "League One", history: "000000000200000000000" },
    { name: "Liverpool", sport: "UCL", conference: "England", division: "Premier League", history: "210142154001000012341" },
    { name: "Manchester City", sport: "UCL", conference: "England", division: "Premier League", history: "112534222131111000000" },
    { name: "Manchester United", sport: "UCL", conference: "England", division: "Premier League", history: "001011021010211424531" },
    { name: "Tottenham Hotspur", sport: "UCL", conference: "England", division: "Premier League", history: "100100141100000200000" },

    // ---------- SPAIN ----------
    { name: "Atlético Madrid", sport: "UCL", conference: "Spain", division: "La Liga", history: "312121211342400011000" },
    { name: "Barcelona", sport: "UCL", conference: "Spain", division: "La Liga", history: "232111232225233535315" },
    { name: "Málaga", sport: "UCL", conference: "Spain", division: "La Liga", history: "000000000000020000000" },
    { name: "Real Madrid", sport: "UCL", conference: "Spain", division: "La Liga", history: "225353115553533311111" },
    { name: "Sevilla", sport: "UCL", conference: "Spain", division: "La Liga", history: "001111002110000010100" },
    { name: "Valencia", sport: "UCL", conference: "Spain", division: "La Liga", history: "000000110010011100120" },
    { name: "Villarreal", sport: "UCL", conference: "Spain", division: "La Liga", history: "100030000000001002003" },

    // ---------- GERMANY ----------
    { name: "Bayern Munich", sport: "UCL", conference: "Germany", division: "Bundesliga", history: "323222513233354142021" },
    { name: "Borussia Dortmund", sport: "UCL", conference: "Germany", division: "Bundesliga", history: "124112111201241000000" },
    { name: "RB Leipzig", sport: "UCL", conference: "Germany", division: "Bundesliga", history: "011111301000000000000" },
    { name: "Schalke 04", sport: "UCL", conference: "Germany", division: "Bundesliga", history: "000000010001110300201" },
    { name: "VfL Wolfsburg", sport: "UCL", conference: "Germany", division: "2. Bundesliga", history: "000010000020000010000" },

    // ---------- ITALY ----------
    { name: "Atalanta", sport: "UCL", conference: "Italy", division: "Serie A", history: "110011200000000000000" },
    { name: "Inter Milan", sport: "UCL", conference: "Italy", division: "Serie A", history: "141411110000001251112" },
    { name: "Juventus", sport: "UCL", conference: "Italy", division: "Serie A", history: "110111122414120011002" },
    { name: "AC Milan", sport: "UCL", conference: "Italy", division: "Serie A", history: "011310000000112110153" },
    { name: "Napoli", sport: "UCL", conference: "Italy", division: "Serie A", history: "101200111100101000000" },
    { name: "Roma", sport: "UCL", conference: "Italy", division: "Serie A", history: "000000013011000101220" },

    // ---------- FRANCE ----------
    { name: "Bordeaux", sport: "UCL", conference: "France", division: "Régionale 1", history: "000000000000000021010" },
    { name: "Lyon", sport: "UCL", conference: "France", division: "Ligue 1", history: "000000310110001131112" },
    { name: "Marseille", sport: "UCL", conference: "France", division: "Ligue 1", history: "100101000000102111100" },
    { name: "Monaco", sport: "UCL", conference: "France", division: "Ligue 1", history: "110000011302000000000" },
    { name: "Paris Saint-Germain", sport: "UCL", conference: "France", division: "Ligue 1", history: "553113411122220000000" },

    // ---------- PORTUGAL ----------
    { name: "Benfica", sport: "UCL", conference: "Portugal", division: "Primeira Liga", history: "111220111121112100112" },
    { name: "Porto", sport: "UCL", conference: "Portugal", division: "Primeira Liga", history: "001112021112011012111" },
    { name: "Sporting CP", sport: "UCL", conference: "Portugal", division: "Primeira Liga", history: "210110001101000001110" },

    // ---------- NETHERLANDS ----------
    { name: "Ajax", sport: "UCL", conference: "Netherlands", division: "Eredivisie", history: "100111130001111100001" },
    { name: "PSV Eindhoven", sport: "UCL", conference: "Netherlands", division: "Eredivisie", history: "111000010110000001121" },

    // ---------- TURKEY ----------
    { name: "Fenerbahçe", sport: "UCL", conference: "Turkey", division: "Süper Lig", history: "000000000000000001201" },
    { name: "Galatasaray", sport: "UCL", conference: "Turkey", division: "Süper Lig", history: "101000110011120000010" },

    // ---------- RUSSIA ----------
    { name: "CSKA Moscow", sport: "UCL", conference: "Russia", division: "Russian Premier League", history: "000000011111101020110" },

    // ---------- UKRAINE ----------
    { name: "Shakhtar Donetsk", sport: "UCL", conference: "Ukraine", division: "Ukrainian Premier League", history: "011111111011111201110" },

    // ---------- CYPRUS ----------
    { name: "APOEL", sport: "UCL", conference: "Cyprus", division: "Cypriot First Division", history: "000000001001002010000" }

];




const bigten = [
    { name: "Illinois", sport: "NCAAM", conference: "BigTen", division: "1", history: "524122000000020201012" },
    { name: "Indiana", sport: "NCAAM", conference: "BigTen", division: "1", history: "000210000032033000122" },
    { name: "Iowa", sport: "NCAAM", conference: "BigTen", division: "1", history: "400112020022100000001" },
    { name: "Maryland", sport: "NCAAM", conference: "BigTen", division: "1", history: "030202020132000022020" },
    { name: "Michigan", sport: "NCAAM", conference: "BigTen", division: "1", history: "730034036310461202000" },
    { name: "Michigan State", sport: "NCAAM", conference: "BigTen", division: "1", history: "342321052215433256321" },
    { name: "Minnesota", sport: "NCAAM", conference: "BigTen", division: "1", history: "000000020100020011000" },
    { name: "Nebraska", sport: "NCAAM", conference: "BigTen", division: "1", history: "301000000000100000000" },
    { name: "Northwestern", sport: "NCAAM", conference: "BigTen", division: "1", history: "002200000200000000000" },
    { name: "Ohio State", sport: "NCAAM", conference: "BigTen", division: "1", history: "100021022002145331062" },
    { name: "Oregon", sport: "NCAAM", conference: "BigTen", division: "1", history: "022003030542230000140" },
    { name: "Penn State", sport: "NCAAM", conference: "BigTen", division: "1", history: "000200000000000100000" },
    { name: "Purdue", sport: "NCAAM", conference: "BigTen", division: "1", history: "436131043311002233220" },
    { name: "Rutgers", sport: "NCAAM", conference: "BigTen", division: "1", history: "000012000000000000000" },
    { name: "UCLA", sport: "NCAAM", conference: "BigTen", division: "1", history: "220335001303310202552" },
    { name: "Southern California", sport: "NCAAM", conference: "BigTen", division: "1", history: "000114000210000102130" },
    { name: "Washington", sport: "NCAAM", conference: "BigTen", division: "1", history: "000000020000000232003" },
    { name: "Wisconsin", sport: "NCAAM", conference: "BigTen", division: "1", history: "121022010336513322321" },
];


const sec = [
    { name: "Alabama",          sport: "NCAAM", conference: "SEC", division: "1", history: "345313002000001000002" },
    { name: "Arkansas",         sport: "NCAAM", conference: "SEC", division: "1", history: "330344001202000000211" },
    { name: "Auburn",           sport: "NCAAM", conference: "SEC", division: "1", history: "051220052000000000000" },
    { name: "Florida",          sport: "NCAAM", conference: "SEC", division: "1", history: "271002022400544410077" },
    { name: "Georgia",          sport: "NCAAM", conference: "SEC", division: "1", history: "110000000001000100100" },
    { name: "Kentucky",         sport: "NCAAM", conference: "SEC", division: "1", history: "231210043425607540122" },
    { name: "Lousiana State",   sport: "NCAAM", conference: "SEC", division: "1", history: "000012030001000002005" },
    { name: "Mississippi State",sport: "NCAAM", conference: "SEC", division: "1", history: "011100010000000001200" },
    { name: "Missouri",         sport: "NCAAM", conference: "SEC", division: "1", history: "110201001000011124000" },
    { name: "Ole Miss",         sport: "NCAAM", conference: "SEC", division: "1", history: "030000010001020000000" },
    { name: "Oklahoma",         sport: "NCAAM", conference: "SEC", division: "1", history: "010002021053110004201" },
    { name: "South Carolina",   sport: "NCAAM", conference: "SEC", division: "1", history: "001000000500000000000" },
    { name: "Tennessee",        sport: "NCAAM", conference: "SEC", division: "1", history: "444321032000300141332" },
    { name: "Texas",            sport: "NCAAM", conference: "SEC", division: "1", history: "312421001011201212424" },
    { name: "Texas A&M",        sport: "NCAAM", conference: "SEC", division: "1", history: "222100003030000122232" },
    { name: "Vanderbilt",       sport: "NCAAM", conference: "SEC", division: "1", history: "210000000110002110130" },
];


const acc = [
    { name: "Boston College",  sport: "NCAAM", conference: "ACC", division: "1", history: "000000000000000001023" },
    { name: "California",      sport: "NCAAM", conference: "ACC", division: "1", history: "000000000010021021001" },
    { name: "Clemson",         sport: "NCAAM", conference: "ACC", division: "1", history: "114001003000000111100" },
    { name: "Duke",            sport: "NCAAM", conference: "ACC", division: "1", history: "454250044237141374213" },
    { name: "Florida State",   sport: "NCAAM", conference: "ACC", division: "1", history: "000003034200002311000" },
    { name: "Georgia Tech",    sport: "NCAAM", conference: "ACC", division: "1", history: "000001000000000020010" },
    { name: "Louisville",      sport: "NCAAM", conference: "ACC", division: "1", history: "210000010204375114420" },
    { name: "Miami",           sport: "NCAAM", conference: "ACC", division: "1", history: "200540001130030000200" },
    { name: "North Carolina State",        sport: "NCAAM", conference: "ACC", division: "1", history: "105100001003113000002" },
    { name: "North Carolina",  sport: "NCAAM", conference: "ACC", division: "1", history: "113061032763224407542" },
    { name: "Notre Dame",      sport: "NCAAM", conference: "ACC", division: "1", history: "000020000244011210210" },
    { name: "Pittsburgh",      sport: "NCAAM", conference: "ACC", division: "1", history: "000200000010210224232" },
    { name: "Southern Methodist",             sport: "NCAAM", conference: "ACC", division: "1", history: "100000000101000000000" },
    { name: "Stanford",        sport: "NCAAM", conference: "ACC", division: "1", history: "000000000000300000310" },
    { name: "Syracuse",        sport: "NCAAM", conference: "ACC", division: "1", history: "000003013050254233001" },
    { name: "Virginia",        sport: "NCAAM", conference: "ACC", division: "1", history: "201101071242301000020" },
    { name: "Virginia Tech",   sport: "NCAAM", conference: "ACC", division: "1", history: "000011031100000000020" },
    { name: "Wake Forest",     sport: "NCAAM", conference: "ACC", division: "1", history: "000000000100000021000" },
];

const big12 = [
    { name: "Arizona",          sport: "NCAAM", conference: "Big12", division: "1", history: "533130001314430403112" },
    { name: "Arizona State",    sport: "NCAAM", conference: "Big12", division: "1", history: "000100011000100002000" },
    { name: "Baylor",           sport: "NCAAM", conference: "Big12", division: "1", history: "022227020311304040100" },
    { name: "Brigham Young",              sport: "NCAAM", conference: "Big12", division: "1", history: "131001000001101321110" },
    { name: "Cincinnati",       sport: "NCAAM", conference: "Big12", division: "1", history: "000000012212113200000" },
    { name: "Colorado",         sport: "NCAAM", conference: "Big12", division: "1", history: "002002000010112000000" },
    { name: "Houston",          sport: "NCAAM", conference: "Big12", division: "1", history: "363345032000000010000" },
    { name: "Iowa State",       sport: "NCAAM", conference: "Big12", division: "1", history: "323130010231322000000" },
    { name: "Kansas",           sport: "NCAAM", conference: "Big12", division: "1", history: "212272025442236423741" },
    { name: "Kansas State",     sport: "NCAAM", conference: "Big12", division: "1", history: "000400014100112240200" },
    { name: "Oklahoma State",   sport: "NCAAM", conference: "Big12", division: "1", history: "000002000101110012000" },
    { name: "Texas Christian",  sport: "NCAAM", conference: "Big12", division: "1", history: "201220001000000000000" },
    { name: "Texas Tech",       sport: "NCAAM", conference: "Big12", division: "1", history: "241032064010000000010" },
    { name: "Central Florida",  sport: "NCAAM", conference: "Big12", division: "1", history: "100000020000000000000" },
    { name: "Utah",             sport: "NCAAM", conference: "Big12", division: "1", history: "000000000023000001000" },
    { name: "West Virginia",    sport: "NCAAM", conference: "Big12", division: "1", history: "000102003313001251303" },
];

const bigeast = [
    { name: "Butler",       sport: "NCAAM", conference: "BigEast", division: "1", history: "000000002322020661230" },
    { name: "Creighton",    sport: "NCAAM", conference: "BigEast", division: "1", history: "023423001100222000010" },
    { name: "DePaul",       sport: "NCAAM", conference: "BigEast", division: "1", history: "000000000000000000000" },
    { name: "Georgetown",   sport: "NCAAM", conference: "BigEast", division: "1", history: "000001000002012110253" },
    { name: "Marquette",    sport: "NCAAM", conference: "BigEast", division: "1", history: "013210010100043312211" },
    { name: "Providence",   sport: "NCAAM", conference: "BigEast", division: "1", history: "000130001121100000000" },
    { name: "Seton Hall",   sport: "NCAAM", conference: "BigEast", division: "1", history: "000010012110000000001" },
    { name: "St. John's",   sport: "NCAAM", conference: "BigEast", division: "1", history: "320000010001000100000" },
    { name: "Connecticut",        sport: "NCAAM", conference: "BigEast", division: "1", history: "627711000020701705105" },
    { name: "Villanova",    sport: "NCAAM", conference: "BigEast", division: "1", history: "100053027272210125314" },
    { name: "Xavier",       sport: "NCAAM", conference: "BigEast", division: "1", history: "010300002423103133421" },
];





