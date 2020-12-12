const cities = [
  {
    name: "BANGKOK, THAILAND",
    image: "/images/rank1as.jpg",
    info:
      "Bangkok, Thailand’s capital, is a large city known for ornate shrines and vibrant street life. The boat-filled Chao Phraya River feeds its network of canals, flowing past the Rattanakosin royal district, home to opulent Grand Palace and its sacred Wat Phra Kaew Temple. Nearby is Wat Pho Temple with an enormous reclining Buddha and, on the opposite shore, Wat Arun Temple with its steep steps and Khmer-style spire.",
    continent: "Asia",
  },
  {
    name: "TOKYO, JAPAN",
    image: "/images/rank2as.jpg",
    info:
      "One of the world's top food cities and also a fashion capital, Tokyo is a city more to experience than to sightsee. It's a huge world city, but anywhere you want to go is within walking distance from a train. It has a very efficient transport service, and you will never be bored if you enjoy big fast-paced cities with big crowds -- you'll see what we mean as you step off Shibuya Station and walk around the Shibuya district. For a trip back in time, visit the Sensoji Temple.",
    continent: "Asia",
  },
  {
    name: "BEIJING, CHINA",
    image: "/images/rank3as.jpg",
    info:
      "The Chinese capital has the country's most stunning imperial palaces (at the Forbidden City), and although getting around may not be easy (locals do not speak English or any other language), it's a city no one should miss (go on guided tours). It's home to one of the world's greatest man-made wonders (the Great Wall), as well as to several cultural sites, including a number of magnificent temples.",
    continent: "Asia",
  },
  {
    name: "Johannesburg, South Africa",
    image: "/images/rank1af.jpg",
    info:
      "Johannesburg is the most beautiful city in South Africa and the entire continent. It is considered the largest and wealthiest city in the country and is often referred to as economy powerhouse. This is because it has the largest economy in not only the country but also the whole continent. Despite Cape Town taking most of its shine, it remains the most beautiful city in Africa that anyone would wish to visit. City Deep dry port (Largest in this planet), Apartheid Museum and stunning skyscrapers are some of the beautiful structures in Johannesburg",
    continent: "Africa",
  },
  {
    name: "Tunis, Tunisia",
    image: "/images/rank2af.jpg",
    info:
      "Tunis is the second most modern city in Africa after Johannesburg. It is the only Arabic city that has made it to our list. It is the most well-organised city in Northern Africa with a population of about 2,700,000 inhabitants. In recent decades, Tunisia government developed Tunis in the aim of making it the most developed city in Africa. It was made the administrative centre of some Tunisian administrative and political organisations. This has largely contributed to it being the centre of the country’s economic and commercial activities",
    continent: "Africa",
  },
  {
    name: "Dar es Salaam, Tanzania",
    image: "/images/rank3af.jpg",
    info:
      "Dar es Salaam is one of the top cities in Africa where peace is abundant just as its name suggests. It is the former largest, capital and richest city in Tanzania. It is home to many foreigners from Asia, India, the US, and even Europe. Dar es Salaam’s Kariakoo shopping district is considered as the busiest and largest in East Africa. According to Wikipedia, here you will find many shops, merchants, bazaars and few hawkers selling a variety of products ranging from hardware materials like cement to foodstuffs.",
    continent: "Africa",
  },
  {
    name: "Florence, Italy",
    image: "/images/rank1eu.jpg",
    info:
      "The secrets of Tuscany’s most populous city are nearly impossible to unravel in just one trip. Some of its charms are easy to see just walking around: The UNESCO World Heritage designated historic center, with Medici palaces, Renaissance churches, and bridges arching over the Arno.",
    continent: "Europe",
  },
  {
    name: "Istanbul, Turkey",
    image: "/images/rank2eu.jpg",
    info:
      "Turkey’s most populous city offers a literal bridge between the regions we call Europe and Asia, and, as one reader said, “it offers the best elements of both.” Beyond the kebabs, raki, Byzantine churches, and Ottoman mosques, there are also exciting modern developments that will add to the draw for travelers.",
    continent: "Europe",
  },
  {
    name: "Rome, Italy",
    image: "/images/rank3eu.jpg",
    info:
      "It’s called the Eternal City for a reason: Italy’s capital has been attracting pilgrims, foreign dignitaries, and leisure tourists since, well, forever. And while most of the main attractions are centuries old, this is a living, breathing city with plenty of appeal for those seeking a more modern form of fun",
    continent: "Europe",
  },
  {
    name: "Chicago, USA",
    image: "/images/rank1na.jpg",
    info:
      "It's no wonder Chicago is topping this list again. A world-class destination known for its impressive architecture, first-rate museums, brilliant chefs, and massive brewing scene, it’ll take several repeat visits to get through your list of must-dos. Most people start with the downtown—from the Magnificent Mile, ritzy Gold Coast, and funky Old Town, not to mention the business-oriented Loop—but there are 77 neighborhoods to explore, where you'll find cutting-edge restaurants, chilled-out corner bars, and, no matter where you go, some of the most pleasant people you'll find anywhere.",
    continent: "North America",
  },
  {
    name: "Washington D.C, USA",
    image: "/images/rank2na.jpg",
    info:
      "Washington, D.C. may have finally shed its buttoned-up reputation. Yes, we're still riding the high from the 2016 opening of the National Museum of African-American History and Culture, designed by world-renowned British-Ghanian architect David Adjaye. But then came the smartly revitalized Wharf, with its can't-miss waterfront views, and the arrival of hotel Eaton, where you get a chance at activism instead of pillow mints, and suddenly, we can't seem to get enough of the place. Something's brewing in D.C., and it's not just the craft beer.",
    continent: "North America",
  },
  {
    name: "Boston, USA",
    image: "/images/rank3na.jpg",
    info:
      "For one of the oldest cities in the United States, Boston sure has aged with style. To get a quick refresher on our nation’s history, walk the Freedom Trail, a 2.5-mile route along a string of historic sites that takes you through the country’s founding. Other activities worth adding to your itinerary include slurping up oysters at Neptune, visiting the eclectic salon-style art display at the Isabella Stewart Gardner Museum, and catching a ball game at Fenway Park. Just be sure to learn the words to “Sweet Caroline” before you go.",
    continent: "North America",
  },
  {
    name: " Rio De Janerio, Brazil ",
    image: "/images/rank1sa.jpg",
    info:
      "Rio de Janeiro is a huge seaside city in Brazil, famed for its Copacabana and Ipanema beaches, 38m Christ the Redeemer statue atop Mount Corcovado and for Sugarloaf Mountain, a granite peak with cable cars to its summit. The city is also known for its sprawling favelas (shanty towns). Its raucous Carnaval festival, featuring parade floats, flamboyant costumes and samba dancers, is considered the world’s largest",
    continent: "South America",
  },
  {
    name: " Cusco, Peru",
    image: "/images/rank2sa.jpg",
    info:
      "Cusco, a city in the Peruvian Andes, was once capital of the Inca Empire, and is now known for its archaeological remains and Spanish colonial architecture. Plaza de Armas is the central square in the old city, with arcades, carved wooden balconies and Incan wall ruins. The baroque Santo Domingo Convent was built on top of the Incan Temple of the Sun (Qoricancha), and has archaeological remains of Inca stonework.",
    continent: "South America",
  },
  {
    name: " Santiago, Chile",
    image: "/images/rank3sa.jpg",
    info:
      "Santiago, Chile’s capital and largest city, sits in a valley surrounded by the snow-capped Andes and the Chilean Coast Range. Plaza de Armas, the grand heart of the city’s old colonial core, is home to 2 neoclassical landmarks: the 1808 Palacio de la Real Audiencia, housing the National History Museum, and the 18th-century Metropolitan Cathedral. La Chascona is the home-turned-museum of poet Pablo Neruda.",
    continent: "South America",
  },
  {
    name: " Adelaide, Australia",
    image: "/images/rank1au.jpg",
    info:
      "Adelaide is popular with expat families, many of whom choose to live in the leafy suburbs of Belair and Banksia Park. You’ll find a varied cultural scene to enjoy, with arts festivals, live music and great restaurants. Chill out at the beautiful Adelaide beaches or travel out to the nearby Barossa Valley vineyards to sample the delicious regional food.",
    continent: "Australia",
  },
  {
    name: " Brisbane, Australia",
    image: "/images/rank2au.jpg",
    info:
      "As Australia’s third largest city, Brisbane offers all the excitement of living in a thriving city – but is way more affordable than Sydney and Melbourne. While the urban center of Brisbane is all shiny skyscrapers, the city is also ideally placed for getting into nature. Brisbane residents are an active bunch and love to enjoy their beautiful river, whether they’re jogging alongside it or sailing on it. The rest of the ‘Sunshine State’s delights are within easy reach, with the Gold Coast and the Great Barrier Reef among the highlights.",
    continent: "Australia",
  },
  {
    name: " Canberra, Australia",
    image: "/images/rank3au.jpg",
    info:
      "In summer, Canberra’s residents take to the shores of Lake Burley Griffin to enjoy picnics, bike rides, fishing and sailing. The city has a great restaurant and bar scene, some interesting cultural attractions, such as the National Gallery of Australia, and no end of adventure activities in the hills and bushland that surround the city.",
    continent: "Australia",
  },
];

export default cities;
