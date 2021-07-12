import { sortData, rankingOnlyMedals, rankingTotalMedals, rankingTotalAthletes, searchTable, filterOnlyOneName, filterByValue, sortDataTwo, sortByMedal, sortDataTwoByNumber, average, athletesByGender, percentage, arrRankingCardAthlete, arrayDataCountry} from '../src/data.js';

describe('sortData', () => {
  it('is a function', () => {
    expect(typeof sortData).toBe('function');
  });
  it('returns array en orden ascendente ', () => {
    expect(sortData(['c','d','a','b','e'], 'asc')).toEqual(['a','b','c','d','e']);
  });
  it('returns array en orden ascendente ignorando acentos', () => {
    expect(sortData(['María', 'Ana', 'Zulema', 'Ágata'], 'asc')).toEqual(['Ágata','Ana','María','Zulema']);
  });
  it('returns array en orden descendente ignorando acentos', () => {
    expect(sortData(['María', 'Ana', 'Zulema', 'Ágata'], 'desc')).toEqual(['Zulema', 'María', 'Ana', 'Ágata']);
  });
});
describe('arrRankingCardAthlete', ()=>{
  const expected = ["Giovanni Abagnale", [{"name": "Giovanni Abagnale", "gender": "M", "height": "198", "weight": "90", "sport": "Rowing", "team": "Italy", "noc": "ITA", "age": 21, "event": "Rowing Men's Coxless Pairs", "medal": "Bronze"}]]
  it('array que no sea nulo', () => {
    expect(arrRankingCardAthlete).not.toBeNull();
  });

  it.skip('contiene un array con esta estructura ["Giovanni Abagnale", [{}] ]', () => {
    expect(arrRankingCardAthlete).toEqual(expect.arrRankingCardAthlete(expected));
  });

  it.skip('contiene una longitud de 1855', () => {
    expect(arrRankingCardAthlete).toHaveLenght(1855);
  });
});
describe('arrayDataCountry', ()=>{
  it('que no sea nulo', () => {
    expect(arrayDataCountry).not.toBeNull();
  });
})
const data = {
  ALG:[
    {
      "name": "Giovanni Abagnale",
      "gender": "M",
      "height": "198",
      "weight": "90",
      "sport": "Rowing",
      "team": "Italy",
      "noc": "ITA",
      "age": 21,
      "event": "Rowing Men's Coxless Pairs",
      "medal": "Bronze"
    },
    {
      "name": "Patimat Abakarova",
      "gender": "F",
      "height": "165",
      "weight": "49",
      "sport": "Taekwondo",
      "team": "Azerbaijan",
      "noc": "AZE",
      "age": 21,
      "event": "Taekwondo Women's Flyweight",
      "medal": "Bronze"
    },
    {Gold: 5, Silver: 2, Bronze: 0}], //2 2 ATLETAS
  AUT:[
    {
      "name": "Luc Abalo",
      "gender": "M",
      "height": "182",
      "weight": "86",
      "sport": "Handball",
      "team": "France",
      "noc": "FRA",
      "age": 31,
      "event": "Handball Men's Handball",
      "medal": "Silver"
    },
    {
      "name": "Saeid Morad Abdevali",
      "gender": "M",
      "height": "170",
      "weight": "80",
      "sport": "Wrestling",
      "team": "Iran",
      "noc": "IRI",
      "age": 26,
      "event": "Wrestling Men's Middleweight, Greco-Roman",
      "medal": "Bronze"
    },
    {
      "name": "Denis Mikhaylovich Ablyazin",
      "gender": "M",
      "height": "161",
      "weight": "62",
      "sport": "Gymnastics",
      "team": "Russia",
      "noc": "RUS",
      "age": 24,
      "event": "Gymnastics Men's Team All-Around",
      "medal": "Silver"
    },
    {
      "name": "Denis Mikhaylovich Ablyazin",
      "gender": "M",
      "height": "161",
      "weight": "62",
      "sport": "Gymnastics",
      "team": "Russia",
      "noc": "RUS",
      "age": 24,
      "event": "Gymnastics Men's Horse Vault",
      "medal": "Silver"
    },
    {
      "name": "Denis Mikhaylovich Ablyazin",
      "gender": "M",
      "height": "161",
      "weight": "62",
      "sport": "Gymnastics",
      "team": "Russia",
      "noc": "RUS",
      "age": 24,
      "event": "Gymnastics Men's Rings",
      "medal": "Bronze"
    },
    {Gold: 0, Silver: 0, Bronze: 2}],//5 3 ATLETAS
  CHN:[
    {
      "name": "Clarisse Agbegnenou",
      "gender": "F",
      "height": "164",
      "weight": "66",
      "sport": "Judo",
      "team": "France",
      "noc": "FRA",
      "age": 23,
      "event": "Judo Women's Half-Middleweight",
      "medal": "Silver"
    },
    {
      "name": "Matthew \"Matt\" Abood",
      "gender": "M",
      "height": "197",
      "weight": "92",
      "sport": "Swimming",
      "team": "Australia",
      "noc": "AUS",
      "age": 30,
      "event": "Swimming Men's 4 x 100 metres Freestyle Relay",
      "medal": "Bronze"
    },
    {
      "name": "Alejandro \"lex\" Abrines Redondo",
      "gender": "M",
      "height": "198",
      "weight": "93",
      "sport": "Basketball",
      "team": "Spain",
      "noc": "ESP",
      "age": 23,
      "event": "Basketball Men's Basketball",
      "medal": "Bronze"
    },
    {
      "name": "Ahmad Abughaush",
      "gender": "M",
      "height": "178",
      "weight": "68",
      "sport": "Taekwondo",
      "team": "Jordan",
      "noc": "JOR",
      "age": 20,
      "event": "Taekwondo Men's Featherweight",
      "medal": "Gold"
    },
    {
      "name": "Chantal Achterberg",
      "gender": "F",
      "height": "172",
      "weight": "72",
      "sport": "Rowing",
      "team": "Netherlands",
      "noc": "NED",
      "age": 31,
      "event": "Rowing Women's Quadruple Sculls",
      "medal": "Silver"
    },
    {
      "name": "Nicola Virginia Adams",
      "gender": "F",
      "height": "164",
      "weight": "51",
      "sport": "Boxing",
      "team": "Great Britain",
      "noc": "GBR",
      "age": 33,
      "event": "Boxing Women's Flyweight",
      "medal": "Gold"
    },
    {Gold: 46, Silver: 30, Bronze: 37}], //6 MEDALLAS 6 ATLETAS
  USA:[
    {
      "name": "Rachael Alexis Adams",
      "gender": "F",
      "height": "188",
      "weight": "81",
      "sport": "Volleyball",
      "team": "United States",
      "noc": "USA",
      "age": 26,
      "event": "Volleyball Women's Volleyball",
      "medal": "Bronze"
    },
    {
      "name": "Valerie Kasanita Adams-Vili (-Price)",
      "gender": "F",
      "height": "193",
      "weight": "120",
      "sport": "Athletics",
      "team": "New Zealand",
      "noc": "NZL",
      "age": 31,
      "event": "Athletics Women's Shot Put",
      "medal": "Silver"
    },
    {
      "name": "Nathan Ghar-Jun Adrian",
      "gender": "M",
      "height": "198",
      "weight": "100",
      "sport": "Swimming",
      "team": "United States",
      "noc": "USA",
      "age": 27,
      "event": "Swimming Men's 50 metres Freestyle",
      "medal": "Bronze"
    },
    {
      "name": "Nathan Ghar-Jun Adrian",
      "gender": "M",
      "height": "198",
      "weight": "100",
      "sport": "Swimming",
      "team": "United States",
      "noc": "USA",
      "age": 27,
      "event": "Swimming Men's 100 metres Freestyle",
      "medal": "Bronze"
    },
    {
      "name": "Nathan Ghar-Jun Adrian",
      "gender": "M",
      "height": "198",
      "weight": "100",
      "sport": "Swimming",
      "team": "United States",
      "noc": "USA",
      "age": 27,
      "event": "Swimming Men's 4 x 100 metres Freestyle Relay",
      "medal": "Gold"
    },
    {
      "name": "Nathan Ghar-Jun Adrian",
      "gender": "M",
      "height": "198",
      "weight": "100",
      "sport": "Swimming",
      "team": "United States",
      "noc": "USA",
      "age": 27,
      "event": "Swimming Men's 4 x 100 metres Medley Relay",
      "medal": "Gold"
    },
    {
      "name": "Cecil Sebastian Afrika",
      "gender": "M",
      "height": "175",
      "weight": "75",
      "sport": "Rugby Sevens",
      "team": "South Africa",
      "noc": "RSA",
      "age": 28,
      "event": "Rugby Sevens Men's Rugby Sevens",
      "medal": "Bronze"
    },
    {
      "name": "Timothy Ernest Victor Kwizera \"Tim\" Agaba",
      "gender": "M",
      "height": "193",
      "weight": "104",
      "sport": "Rugby Sevens",
      "team": "South Africa",
      "noc": "RSA",
      "age": 27,
      "event": "Rugby Sevens Men's Rugby Sevens",
      "medal": "Bronze"
    },
    {Gold: 139, Silver: 54, Bronze: 71}],//8 MEDALLAS 5 ATLETAS
  PER:[
      {
        "name": "Luc Abalo",
        "gender": "M",
        "height": "182",
        "weight": "86",
        "sport": "Handball",
        "team": "France",
        "noc": "FRA",
        "age": 31,
        "event": "Handball Men's Handball",
        "medal": "Silver"
      },
      {
        "name": "Saeid Morad Abdevali",
        "gender": "M",
        "height": "170",
        "weight": "80",
        "sport": "Wrestling",
        "team": "Iran",
        "noc": "IRI",
        "age": 26,
        "event": "Wrestling Men's Middleweight, Greco-Roman",
        "medal": "Bronze"
      },
      {
        "name": "Denis Mikhaylovich Ablyazin",
        "gender": "M",
        "height": "161",
        "weight": "62",
        "sport": "Gymnastics",
        "team": "Russia",
        "noc": "RUS",
        "age": 24,
        "event": "Gymnastics Men's Team All-Around",
        "medal": "Silver"
      },
      {
        "name": "Denis Mikhaylovich Ablyazin",
        "gender": "M",
        "height": "161",
        "weight": "62",
        "sport": "Gymnastics",
        "team": "Russia",
        "noc": "RUS",
        "age": 24,
        "event": "Gymnastics Men's Horse Vault",
        "medal": "Silver"
      },
      {
        "name": "Denis Mikhaylovich Ablyazin",
        "gender": "M",
        "height": "161",
        "weight": "62",
        "sport": "Gymnastics",
        "team": "Russia",
        "noc": "RUS",
        "age": 24,
        "event": "Gymnastics Men's Rings",
        "medal": "Bronze"
      },
      {Gold: 3, Silver: 2, Bronze: 2}] //5 MEDALLAS 3 ATLETAS
}
describe('rankingOnlyMedals', () => {
  it('is a function', () => {
    expect(typeof rankingOnlyMedals).toBe('function');
  });

  it('returns array ranking de países con más medallas `Gold`', () => {
    expect(rankingOnlyMedals(data,'Gold','desc')).toEqual(['USA','CHN','ALG','PER','AUT']);
  });
  it('returns array ranking de países con más medallas `Silver`', () => {
    expect(rankingOnlyMedals(data,'Silver','desc')).toEqual(['USA','CHN','ALG','PER','AUT']);
  });
  it('returns array ranking de países con más medallas `Bronze`', () => {
    expect(rankingOnlyMedals(data,'Bronze','desc')).toEqual(['USA','CHN','AUT','PER','ALG']);
  });
  it('returns array ranking de países con menos medallas `Bronze`', () => {
    expect(rankingOnlyMedals(data,'Bronze','asc')).toEqual(['ALG','AUT','PER','CHN','USA']);
  });
});
describe('rankingTotalMedals', () => {
  it('is a function', () => {
    expect(typeof rankingTotalMedals).toBe('function');
  });
  it('returns array ranking de países con más medallas totales', () => {
    expect(rankingTotalMedals(data,'desc')).toEqual(['USA','CHN','AUT','PER','ALG']);
  });
  it('returns array ranking de países con menos medallas totales', () => {
    expect(rankingTotalMedals(data,'asc')).toEqual(['ALG','AUT','PER','CHN','USA']);
  });
});
describe('rankingTotalAthletes', () => {
  it('is a function', () => {
    expect(typeof rankingTotalAthletes).toBe('function');
  });
  it('returns array ordenado por cantidad de Atletas descendentemente', () => {
    expect(rankingTotalAthletes(data, 'desc')).toEqual(['CHN','USA','AUT', 'PER', 'ALG']);
  });
  it('returns array ordenado por cantidad de Atletas ascendentemente', () => {
    expect(rankingTotalAthletes(data, 'asc')).toEqual(['ALG','AUT','PER', 'USA', 'CHN']);
  });
});
describe('searchTable', () => {
  it('is a function', () => {
    expect(typeof searchTable).toBe('function');
  });
  it('return array de países que incluyan la `a` dentro', () => {
    expect(searchTable('a', data)).toEqual(['ALG', 'AUT', 'USA']);
  });
  it('return array de países que incluyan la `c` dentro', () => {
    expect(searchTable('c', data)).toEqual(['CHN']);
  });
  it('return array de países que incluyan la `d` dentro', () => {
    expect(searchTable('d', data)).toEqual([]);
  });
  it('return array de países que incluyan la `T` dentro', () => {
    expect(searchTable('T', data)).toEqual(['AUT']);
  });

});

const data2 = [
    {
      "name": "Giovanni Abagnale",
      "gender": "M",
      "height": "198",
      "weight": "90",
      "sport": "Rowing",
      "team": "Italy",
      "noc": "ITA",
      "age": 21,
      "event": "Rowing Men's Coxless Pairs",
      "medal": "Bronze"
    },
    {
      "name": "Patimat Abakarova",
      "gender": "F",
      "height": "165",
      "weight": "49",
      "sport": "Taekwondo",
      "team": "Azerbaijan",
      "noc": "AZE",
      "age": 21,
      "event": "Taekwondo Women's Flyweight",
      "medal": "Bronze"
    },
    {
      "name": "Luc Abalo",
      "gender": "M",
      "height": "182",
      "weight": "86",
      "sport": "Handball",
      "team": "France",
      "noc": "FRA",
      "age": 31,
      "event": "Handball Men's Handball",
      "medal": "Silver"
    },
    {
      "name": "Saeid Morad Abdevali",
      "gender": "M",
      "height": "170",
      "weight": "80",
      "sport": "Wrestling",
      "team": "Iran",
      "noc": "IRI",
      "age": 26,
      "event": "Wrestling Men's Middleweight, Greco-Roman",
      "medal": "Bronze"
    },
    {
      "name": "Denis Mikhaylovich Ablyazin",
      "gender": "M",
      "height": "161",
      "weight": "62",
      "sport": "Gymnastics",
      "team": "Russia",
      "noc": "RUS",
      "age": 24,
      "event": "Gymnastics Men's Team All-Around",
      "medal": "Silver"
    },
    {
      "name": "Denis Mikhaylovich Ablyazin",
      "gender": "M",
      "height": "161",
      "weight": "62",
      "sport": "Gymnastics",
      "team": "Russia",
      "noc": "RUS",
      "age": 24,
      "event": "Gymnastics Men's Horse Vault",
      "medal": "Silver"
    },
    {
      "name": "Denis Mikhaylovich Ablyazin",
      "gender": "M",
      "height": "161",
      "weight": "62",
      "sport": "Gymnastics",
      "team": "Russia",
      "noc": "RUS",
      "age": 24,
      "event": "Gymnastics Men's Rings",
      "medal": "Bronze"
    },
    {
      "name": "Nathan Ghar-Jun Adrian",
      "gender": "M",
      "height": "198",
      "weight": "100",
      "sport": "Swimming",
      "team": "United States",
      "noc": "USA",
      "age": 27,
      "event": "Swimming Men's 50 metres Freestyle",
      "medal": "Bronze"
    },
    {
      "name": "Nathan Ghar-Jun Adrian",
      "gender": "M",
      "height": "198",
      "weight": "100",
      "sport": "Swimming",
      "team": "United States",
      "noc": "USA",
      "age": 27,
      "event": "Swimming Men's 100 metres Freestyle",
      "medal": "Bronze"
    },
    {
      "name": "Nathan Ghar-Jun Adrian",
      "gender": "M",
      "height": "198",
      "weight": "100",
      "sport": "Swimming",
      "team": "United States",
      "noc": "USA",
      "age": 27,
      "event": "Swimming Men's 4 x 100 metres Freestyle Relay",
      "medal": "Gold"
    },
    {
      "name": "Nathan Ghar-Jun Adrian",
      "gender": "M",
      "height": "198",
      "weight": "NA",
      "sport": "Swimming",
      "team": "United States",
      "noc": "USA",
      "age": 27,
      "event": "Swimming Men's 4 x 100 metres Medley Relay",
      "medal": "Gold"
    }];
describe('filterOnlyOneName', () => {
  it('is a function', () => {
    expect(typeof filterOnlyOneName).toBe('function');
  });
  it('returns array de objetos filtrados sin repetir por `nombre` ', () => {
    expect(filterOnlyOneName(data2, 'name')).toEqual([{
      "name": "Giovanni Abagnale",
      "gender": "M",
      "height": "198",
      "weight": "90",
      "sport": "Rowing",
      "team": "Italy",
      "noc": "ITA",
      "age": 21,
      "event": "Rowing Men's Coxless Pairs",
      "medal": "Bronze"
    },
    {
      "name": "Patimat Abakarova",
      "gender": "F",
      "height": "165",
      "weight": "49",
      "sport": "Taekwondo",
      "team": "Azerbaijan",
      "noc": "AZE",
      "age": 21,
      "event": "Taekwondo Women's Flyweight",
      "medal": "Bronze"
    },
    {
      "name": "Luc Abalo",
      "gender": "M",
      "height": "182",
      "weight": "86",
      "sport": "Handball",
      "team": "France",
      "noc": "FRA",
      "age": 31,
      "event": "Handball Men's Handball",
      "medal": "Silver"
    },
    {
      "name": "Saeid Morad Abdevali",
      "gender": "M",
      "height": "170",
      "weight": "80",
      "sport": "Wrestling",
      "team": "Iran",
      "noc": "IRI",
      "age": 26,
      "event": "Wrestling Men's Middleweight, Greco-Roman",
      "medal": "Bronze"
    },
    {
      "name": "Denis Mikhaylovich Ablyazin",
      "gender": "M",
      "height": "161",
      "weight": "62",
      "sport": "Gymnastics",
      "team": "Russia",
      "noc": "RUS",
      "age": 24,
      "event": "Gymnastics Men's Team All-Around",
      "medal": "Silver"
    },
    {
      "name": "Nathan Ghar-Jun Adrian",
      "gender": "M",
      "height": "198",
      "weight": "100",
      "sport": "Swimming",
      "team": "United States",
      "noc": "USA",
      "age": 27,
      "event": "Swimming Men's 50 metres Freestyle",
      "medal": "Bronze"
    }]);
  });
  it('returns array de objetos filtrados sin repetir por `sport` ', () => {
    expect(filterOnlyOneName(data2, 'sport')).toEqual([
      {
        "name": "Giovanni Abagnale",
        "gender": "M",
        "height": "198",
        "weight": "90",
        "sport": "Rowing",
        "team": "Italy",
        "noc": "ITA",
        "age": 21,
        "event": "Rowing Men's Coxless Pairs",
        "medal": "Bronze"
      },
      {
        "name": "Patimat Abakarova",
        "gender": "F",
        "height": "165",
        "weight": "49",
        "sport": "Taekwondo",
        "team": "Azerbaijan",
        "noc": "AZE",
        "age": 21,
        "event": "Taekwondo Women's Flyweight",
        "medal": "Bronze"
      },
      {
        "name": "Luc Abalo",
        "gender": "M",
        "height": "182",
        "weight": "86",
        "sport": "Handball",
        "team": "France",
        "noc": "FRA",
        "age": 31,
        "event": "Handball Men's Handball",
        "medal": "Silver"
      },
      {
        "name": "Saeid Morad Abdevali",
        "gender": "M",
        "height": "170",
        "weight": "80",
        "sport": "Wrestling",
        "team": "Iran",
        "noc": "IRI",
        "age": 26,
        "event": "Wrestling Men's Middleweight, Greco-Roman",
        "medal": "Bronze"
      },
      {
        "name": "Denis Mikhaylovich Ablyazin",
        "gender": "M",
        "height": "161",
        "weight": "62",
        "sport": "Gymnastics",
        "team": "Russia",
        "noc": "RUS",
        "age": 24,
        "event": "Gymnastics Men's Team All-Around",
        "medal": "Silver"
      },
      {
        "name": "Nathan Ghar-Jun Adrian",
        "gender": "M",
        "height": "198",
        "weight": "100",
        "sport": "Swimming",
        "team": "United States",
        "noc": "USA",
        "age": 27,
        "event": "Swimming Men's 50 metres Freestyle",
        "medal": "Bronze"
      }]);
  });
});
describe('filterByValue', () => {
  it('is a function', () => {
    expect(typeof filterByValue).toBe('function');
  });
  it('returns array de objetos que contengan por valor `RUS`', () => {
    expect(filterByValue(data2, 'noc', 'RUS')).toEqual([{
      "name": "Denis Mikhaylovich Ablyazin",
      "gender": "M",
      "height": "161",
      "weight": "62",
      "sport": "Gymnastics",
      "team": "Russia",
      "noc": "RUS",
      "age": 24,
      "event": "Gymnastics Men's Team All-Around",
      "medal": "Silver"
    },
    {
      "name": "Denis Mikhaylovich Ablyazin",
      "gender": "M",
      "height": "161",
      "weight": "62",
      "sport": "Gymnastics",
      "team": "Russia",
      "noc": "RUS",
      "age": 24,
      "event": "Gymnastics Men's Horse Vault",
      "medal": "Silver"
    },
    {
      "name": "Denis Mikhaylovich Ablyazin",
      "gender": "M",
      "height": "161",
      "weight": "62",
      "sport": "Gymnastics",
      "team": "Russia",
      "noc": "RUS",
      "age": 24,
      "event": "Gymnastics Men's Rings",
      "medal": "Bronze"
    }]);
  });
  it('returns array de objetos que contengan por valor `PER`', () => {
      expect(filterByValue(data2, 'noc', 'PER')).toEqual([]);
  });
});
describe('sortDataTwo', () => {
  it('is a function', () => {
    expect(typeof sortDataTwo).toBe('function');
  });
  it('returns data ordenada alfabeticamente por `name`', () => {
    expect(sortDataTwo(data2,'name')).toEqual([{
      "name": "Denis Mikhaylovich Ablyazin",
      "gender": "M",
      "height": "161",
      "weight": "62",
      "sport": "Gymnastics",
      "team": "Russia",
      "noc": "RUS",
      "age": 24,
      "event": "Gymnastics Men's Team All-Around",
      "medal": "Silver"
    },
    {
      "name": "Denis Mikhaylovich Ablyazin",
      "gender": "M",
      "height": "161",
      "weight": "62",
      "sport": "Gymnastics",
      "team": "Russia",
      "noc": "RUS",
      "age": 24,
      "event": "Gymnastics Men's Horse Vault",
      "medal": "Silver"
    },
    {
      "name": "Denis Mikhaylovich Ablyazin",
      "gender": "M",
      "height": "161",
      "weight": "62",
      "sport": "Gymnastics",
      "team": "Russia",
      "noc": "RUS",
      "age": 24,
      "event": "Gymnastics Men's Rings",
      "medal": "Bronze"
    },
    {
      "name": "Giovanni Abagnale",
      "gender": "M",
      "height": "198",
      "weight": "90",
      "sport": "Rowing",
      "team": "Italy",
      "noc": "ITA",
      "age": 21,
      "event": "Rowing Men's Coxless Pairs",
      "medal": "Bronze"
    },
    {
      "name": "Luc Abalo",
      "gender": "M",
      "height": "182",
      "weight": "86",
      "sport": "Handball",
      "team": "France",
      "noc": "FRA",
      "age": 31,
      "event": "Handball Men's Handball",
      "medal": "Silver"
    },
    {
      "name": "Nathan Ghar-Jun Adrian",
      "gender": "M",
      "height": "198",
      "weight": "100",
      "sport": "Swimming",
      "team": "United States",
      "noc": "USA",
      "age": 27,
      "event": "Swimming Men's 50 metres Freestyle",
      "medal": "Bronze"
    },
    {
      "name": "Nathan Ghar-Jun Adrian",
      "gender": "M",
      "height": "198",
      "weight": "100",
      "sport": "Swimming",
      "team": "United States",
      "noc": "USA",
      "age": 27,
      "event": "Swimming Men's 100 metres Freestyle",
      "medal": "Bronze"
    },
    {
      "name": "Nathan Ghar-Jun Adrian",
      "gender": "M",
      "height": "198",
      "weight": "100",
      "sport": "Swimming",
      "team": "United States",
      "noc": "USA",
      "age": 27,
      "event": "Swimming Men's 4 x 100 metres Freestyle Relay",
      "medal": "Gold"
    },
    {
      "name": "Nathan Ghar-Jun Adrian",
      "gender": "M",
      "height": "198",
      "weight": "NA",
      "sport": "Swimming",
      "team": "United States",
      "noc": "USA",
      "age": 27,
      "event": "Swimming Men's 4 x 100 metres Medley Relay",
      "medal": "Gold"
    },
    {
      "name": "Patimat Abakarova",
      "gender": "F",
      "height": "165",
      "weight": "49",
      "sport": "Taekwondo",
      "team": "Azerbaijan",
      "noc": "AZE",
      "age": 21,
      "event": "Taekwondo Women's Flyweight",
      "medal": "Bronze"
    },
    {
      "name": "Saeid Morad Abdevali",
      "gender": "M",
      "height": "170",
      "weight": "80",
      "sport": "Wrestling",
      "team": "Iran",
      "noc": "IRI",
      "age": 26,
      "event": "Wrestling Men's Middleweight, Greco-Roman",
      "medal": "Bronze"
    }]);
  });
});
describe('sortByMedal', () => {
  it('is a function', () => {
    expect(typeof sortByMedal).toBe('function');
  });
  it('return data ordenada por medallas', () => {
    expect(sortByMedal(data2)).toEqual([
      {
        "name": "Nathan Ghar-Jun Adrian",
        "gender": "M",
        "height": "198",
        "weight": "100",
        "sport": "Swimming",
        "team": "United States",
        "noc": "USA",
        "age": 27,
        "event": "Swimming Men's 4 x 100 metres Freestyle Relay",
        "medal": "Gold"
      },
      {
        "name": "Nathan Ghar-Jun Adrian",
        "gender": "M",
        "height": "198",
        "weight": "NA",
        "sport": "Swimming",
        "team": "United States",
        "noc": "USA",
        "age": 27,
        "event": "Swimming Men's 4 x 100 metres Medley Relay",
        "medal": "Gold"
      },
      {
      "name": "Denis Mikhaylovich Ablyazin",
      "gender": "M",
      "height": "161",
      "weight": "62",
      "sport": "Gymnastics",
      "team": "Russia",
      "noc": "RUS",
      "age": 24,
      "event": "Gymnastics Men's Team All-Around",
      "medal": "Silver"
    },
    {
      "name": "Denis Mikhaylovich Ablyazin",
      "gender": "M",
      "height": "161",
      "weight": "62",
      "sport": "Gymnastics",
      "team": "Russia",
      "noc": "RUS",
      "age": 24,
      "event": "Gymnastics Men's Horse Vault",
      "medal": "Silver"
    },
    {
      "name": "Luc Abalo",
      "gender": "M",
      "height": "182",
      "weight": "86",
      "sport": "Handball",
      "team": "France",
      "noc": "FRA",
      "age": 31,
      "event": "Handball Men's Handball",
      "medal": "Silver"
    },
    {
      "name": "Denis Mikhaylovich Ablyazin",
      "gender": "M",
      "height": "161",
      "weight": "62",
      "sport": "Gymnastics",
      "team": "Russia",
      "noc": "RUS",
      "age": 24,
      "event": "Gymnastics Men's Rings",
      "medal": "Bronze"
    },
    {
      "name": "Giovanni Abagnale",
      "gender": "M",
      "height": "198",
      "weight": "90",
      "sport": "Rowing",
      "team": "Italy",
      "noc": "ITA",
      "age": 21,
      "event": "Rowing Men's Coxless Pairs",
      "medal": "Bronze"
    },
    {
      "name": "Nathan Ghar-Jun Adrian",
      "gender": "M",
      "height": "198",
      "weight": "100",
      "sport": "Swimming",
      "team": "United States",
      "noc": "USA",
      "age": 27,
      "event": "Swimming Men's 50 metres Freestyle",
      "medal": "Bronze"
    },
    {
      "name": "Nathan Ghar-Jun Adrian",
      "gender": "M",
      "height": "198",
      "weight": "100",
      "sport": "Swimming",
      "team": "United States",
      "noc": "USA",
      "age": 27,
      "event": "Swimming Men's 100 metres Freestyle",
      "medal": "Bronze"
    },
    {
      "name": "Patimat Abakarova",
      "gender": "F",
      "height": "165",
      "weight": "49",
      "sport": "Taekwondo",
      "team": "Azerbaijan",
      "noc": "AZE",
      "age": 21,
      "event": "Taekwondo Women's Flyweight",
      "medal": "Bronze"
    },
    {
      "name": "Saeid Morad Abdevali",
      "gender": "M",
      "height": "170",
      "weight": "80",
      "sport": "Wrestling",
      "team": "Iran",
      "noc": "IRI",
      "age": 26,
      "event": "Wrestling Men's Middleweight, Greco-Roman",
      "medal": "Bronze"
    }]);
  });
});
describe('sortDataTwoByNumber', () => {
  it('is a function', () => {
    expect(typeof sortDataTwoByNumber).toBe('function');
  });
  it('return data ordenada ascendentemente por `weight`', () => {
    expect(sortDataTwoByNumber(data2, 'weight')).toEqual([
      {
        "name": "Patimat Abakarova",
        "gender": "F",
        "height": "165",
        "weight": "49",
        "sport": "Taekwondo",
        "team": "Azerbaijan",
        "noc": "AZE",
        "age": 21,
        "event": "Taekwondo Women's Flyweight",
        "medal": "Bronze"
      },
      {
        "name": "Denis Mikhaylovich Ablyazin",
        "gender": "M",
        "height": "161",
        "weight": "62",
        "sport": "Gymnastics",
        "team": "Russia",
        "noc": "RUS",
        "age": 24,
        "event": "Gymnastics Men's Team All-Around",
        "medal": "Silver"
      },
      {
        "name": "Denis Mikhaylovich Ablyazin",
        "gender": "M",
        "height": "161",
        "weight": "62",
        "sport": "Gymnastics",
        "team": "Russia",
        "noc": "RUS",
        "age": 24,
        "event": "Gymnastics Men's Horse Vault",
        "medal": "Silver"
      },
      {
        "name": "Denis Mikhaylovich Ablyazin",
        "gender": "M",
        "height": "161",
        "weight": "62",
        "sport": "Gymnastics",
        "team": "Russia",
        "noc": "RUS",
        "age": 24,
        "event": "Gymnastics Men's Rings",
        "medal": "Bronze"
      },
      {
        "name": "Saeid Morad Abdevali",
        "gender": "M",
        "height": "170",
        "weight": "80",
        "sport": "Wrestling",
        "team": "Iran",
        "noc": "IRI",
        "age": 26,
        "event": "Wrestling Men's Middleweight, Greco-Roman",
        "medal": "Bronze"
      },
      {
        "name": "Luc Abalo",
        "gender": "M",
        "height": "182",
        "weight": "86",
        "sport": "Handball",
        "team": "France",
        "noc": "FRA",
        "age": 31,
        "event": "Handball Men's Handball",
        "medal": "Silver"
      },
      {
        "name": "Giovanni Abagnale",
        "gender": "M",
        "height": "198",
        "weight": "90",
        "sport": "Rowing",
        "team": "Italy",
        "noc": "ITA",
        "age": 21,
        "event": "Rowing Men's Coxless Pairs",
        "medal": "Bronze"
      },
      {
        "name": "Nathan Ghar-Jun Adrian",
        "gender": "M",
        "height": "198",
        "weight": "100",
        "sport": "Swimming",
        "team": "United States",
        "noc": "USA",
        "age": 27,
        "event": "Swimming Men's 50 metres Freestyle",
        "medal": "Bronze"
      },
      {
        "name": "Nathan Ghar-Jun Adrian",
        "gender": "M",
        "height": "198",
        "weight": "100",
        "sport": "Swimming",
        "team": "United States",
        "noc": "USA",
        "age": 27,
        "event": "Swimming Men's 100 metres Freestyle",
        "medal": "Bronze"
      },
      {
        "name": "Nathan Ghar-Jun Adrian",
        "gender": "M",
        "height": "198",
        "weight": "100",
        "sport": "Swimming",
        "team": "United States",
        "noc": "USA",
        "age": 27,
        "event": "Swimming Men's 4 x 100 metres Freestyle Relay",
        "medal": "Gold"
      },
      {
        "name": "Nathan Ghar-Jun Adrian",
        "gender": "M",
        "height": "198",
        "weight": "NA",
        "sport": "Swimming",
        "team": "United States",
        "noc": "USA",
        "age": 27,
        "event": "Swimming Men's 4 x 100 metres Medley Relay",
        "medal": "Gold"
      }
    ]);
  });
});
describe('average', () => {
  it('is a function', () => {
    expect(typeof  average).toBe('function');
  });

  it('returns promedio `height` 180.91', () => {
    expect(average(data2, 'height', 2)).toEqual(180.91);
  });
  it('returns promedio `age` ', () => {
    expect(average(data2, 'age', 0)).toEqual(25);
  });
  it('returns promedio `weight` ', () => {
    expect(average(data2, 'weight', 2)).toEqual(79.1);
  });
});
describe('athletesByGender', () => {
  it('is a function', () => {
    expect(typeof athletesByGender).toBe('function');
  });

  it.skip('returns `example`', () => {
    expect(example()).toBe('example');
  });
});
describe('percentage', () => {
  it('is a function', () => {
    expect(typeof percentage).toBe('function');
  });

  it.skip('returns `example`', () => {
    expect(example()).toBe('example');
  });
});