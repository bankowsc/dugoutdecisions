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




const teams2 = [
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
    { name: "USC", sport: "NCAAM", conference: "BigTen", division: "1", history: "000114000210000102130" },
    { name: "Washington", sport: "NCAAM", conference: "BigTen", division: "1", history: "000000020000000232003" },
    { name: "Wisconsin", sport: "NCAAM", conference: "BigTen", division: "1", history: "121022010336513322321" },
];

const teams3 = [
    { name: "Alabama",         sport: "NCAAM", conference: "SEC", division: "1", history: "" },
    { name: "Arkansas",        sport: "NCAAM", conference: "SEC", division: "1", history: "" },
    { name: "Auburn",          sport: "NCAAM", conference: "SEC", division: "1", history: "" },
    { name: "Florida",         sport: "NCAAM", conference: "SEC", division: "1", history: "" },
    { name: "Georgia",         sport: "NCAAM", conference: "SEC", division: "1", history: "" },
    { name: "Kentucky",        sport: "NCAAM", conference: "SEC", division: "1", history: "" },
    { name: "LSU",             sport: "NCAAM", conference: "SEC", division: "1", history: "" },
    { name: "Mississippi State", sport: "NCAAM", conference: "SEC", division: "1", history: "" },
    { name: "Missouri",        sport: "NCAAM", conference: "SEC", division: "1", history: "" },
    { name: "Ole Miss",        sport: "NCAAM", conference: "SEC", division: "1", history: "" },
    { name: "Oklahoma",        sport: "NCAAM", conference: "SEC", division: "1", history: "" },
    { name: "South Carolina",  sport: "NCAAM", conference: "SEC", division: "1", history: "" },
    { name: "Tennessee",       sport: "NCAAM", conference: "SEC", division: "1", history: "" },
    { name: "Texas",           sport: "NCAAM", conference: "SEC", division: "1", history: "" },
    { name: "Texas A&M",       sport: "NCAAM", conference: "SEC", division: "1", history: "" },
    { name: "Vanderbilt",      sport: "NCAAM", conference: "SEC", division: "1", history: "" },
];









