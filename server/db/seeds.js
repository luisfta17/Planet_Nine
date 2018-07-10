use space_hub;
db.dropDatabase();

db.planets.insertMany([
  {
    name: 'Sun',
    dfe: '149.60 million kilometers',
    radius: '695,508 kilometers',
    picture: 'https://solarsystem.nasa.gov/system/resources/detail_files/768_oct_1_2015_flare.jpg',
    gif: 'https://media.giphy.com/media/ctGFLebG1AqK4/giphy.gif',
    summary: 'The Sun is a hot ball of glowing gases at the heart of our solar system. Its gravity holds in its orbit everything from the biggest planets to the smallest particles of debris. There are billions of stars like our Sun scattered across the Milky Way galaxy. The Sun drives the Earths seasons, ocean currents, weather, climate, radiation belts and auroras. The Sun’s volume would need 1.3 million Earths to fill it.',
    orbitAndRotation: 'The Sun is located in the Milky Way galaxy. The Sun orbits the center of the Milky Way Galaxy, bringing the planets, asteroids, comets and other objects along with it. Our Sun is in a spiral arm called the Orion Spur that extends outward from the Sagittarius arm. Our solar system is moving with an average velocity of 450,000 miles per hour (720,000 kilometers per hour). But even at this speed, it takes us about 230 million years to make one complete orbit around the Milky Way. At the equator, the Sun spins around once about every 25 days, but at its poles the Sun rotates once on its axis every 36 Earth days.At the equator, the Sun spins once about every 25 days, but at its poles the Sun rotates once on its axis every 35 Earth days.',
    formation: 'The Sun and the rest of the solar system formed from a solar nebula about 4.5 billion years ago. The Sun will someday run out of energy. When the Sun starts to die, it will swell so big that it will engulf Mercury and Venus and maybe even Earth. However the Sun is a little less than halfway through its lifetime and will last another 6.5 billion years before it shrinks down to be a white dwarf. It core is about 27 million degrees Fahrenheit (15 million degrees Celsius).',
    life: 'With its hot, energetic mix of gases and plasma life does not exist in the Sun. But the Sun has made life on Earth possible, providing warmth as well as energy that organisms like plants use to form the basis of many food chains.'
  },
  {
    name: 'Mercury',
    radius: '2,440 kilometers',
    dfe: '77 million kilometers',

    picture: 'https://solarsystem.nasa.gov/system/resources/detail_files/771_PIA16853.jpg',
    gif:'https://media.giphy.com/media/l0HlO4V8iCRME3i0g/giphy.gif',

    summary: "The smallest planet in our solar system and nearest to the Sun, Mercury is only slightly larger than Earth's Moon. From the surface of Mercury, the Sun would appear more than three times as large as it does when viewed from Earth, and the sunlight would be as much as 11 times brighter. Despite its proximity to the Sun, Mercury is not the hottest planet in our solar system – that title belongs to nearby Venus, thanks to its dense atmosphere. But Mercury is the fastest planet, zipping around the Sun every 88 Earth days. Mercury is a little more than 1/3 the width of Earth. If Earth were the size of a nickel, Mercury would be about as big as a blueberry. It takes sunlight 3.2 minutes to travel from the Sun to Mercury.",

    orbitAndRotation: "Mercury's highly eccentric, egg-shaped orbit takes the planet as close as 29 million miles (47 million kilometers) and as far as 43 million miles (70 million kilometers) from the Sun. It speeds around the Sun every 88 days, traveling through space at nearly 29 miles (47 kilometers) per second, faster than any other planet.Mercury spins slowly on its axis and completes one rotation every 59 Earth days. But when Mercury is moving fastest in its elliptical orbit around the Sun (and it is closest to the Sun), each rotation is not accompanied by a sunrise and sunset like it is on most other planets. The morning Sun appears to rise briefly, set and rise again from some parts of the planet's surface. The same thing happens in reverse at sunset for other parts of the surface. One Mercury solar day (one full day-night cycle) equals 176 Earth days—just over two years on Mercury.",

    formation: 'Like its fellow terrestrial planets, Mercury has a central core, a rocky mantle and a solid crust.',

    life: "Mercury's environment is not conducive to life. The temperatures and solar radiation that characterize this planet are most likely too extreme for organisms to adapt to."
  },
  {
    name: 'Venus',
    radius: '6,052 kilometers',
    dfe: '40 million kilometers',

    picture: 'https://solarsystem.nasa.gov/system/resources/detail_files/688_Venus.jpg',

    summary: "Venus is the second planet from the Sun and our closest planetary neighbor. Similar in structure and size to Earth, Venus spins slowly in the opposite direction from most planets. Its thick atmosphere traps heat in a runaway greenhouse effect, making it the hottest planet in our solar system with surface temperatures hot enough to melt lead. Glimpses below the clouds reveal volcanoes and deformed mountains. Venus is roughly the same size as Earth — just slightly smaller. It takes sunlight 6 minutes to travel from the Sun to Venus.",

    orbitAndRotation: "Venus is one of just two planets that rotate from east to west. Only Venus and Uranus have this backwards rotation. It completes one rotation in 243 Earth days — the longest day of any planet in our solar system, even longer than a whole year on Venus. But the Sun doesn't rise and set each day on Venus like it does on most other planets. On Venus, one day-night cycle takes 117 Earth days because Venus rotates in the direction opposite of its orbital revolution around the Sun. Venus makes a complete orbit around the Sun (a year in Venusian time) in 225 Earth days or slightly less than two Venusian day-night cycles. Its orbit around the Sun is the most circular of any planet — nearly a perfect circle. Other planet's orbits are more elliptical, or oval-shaped. With an axial tilt of just 3 degrees, Venus spins nearly upright, and so does not experience noticeable seasons.",

    formation: 'Venus has a central core, a rocky mantle and a solid crust.',

    life: "No human has visited Venus, but the spacecraft that have been sent to the surface of Venus do not last very long there. Venus' high surface temperatures overheat electronics in spacecraft in a short time, so it seems unlikely that a person could survive for long on the Venusian surface. There is speculation about life existing in Venus' distant past, as well as questions about the possibility of life in the top cloud layers of Venus' atmosphere, where the temperatures are less extreme."
  },
  {
    name: 'Earth',
    radius: '6,371 kilometers',
    dfe: '0 kilometers',

    picture: 'https://solarsystem.nasa.gov/system/resources/detail_files/786_1-bluemarble_west.jpg',

    summary: "Our home planet is the third planet from the Sun, and the only place we know of so far that’s inhabited by living things. While Earth is only the fifth largest planet in the solar system, it is the only world in our solar system with liquid water on the surface. The name Earth is at least 1,000 years old. All of the planets, except for Earth, were named after Greek and Roman gods and goddesses. However, the name Earth is a Germanic word, which simply means the ground. Earth is the biggest of the terrestrial planets, and the fifth largest planet overall. It takes about eight minutes for light from the Sun to reach our planet.",

    orbitAndRotation: "As Earth orbits the Sun, it completes one rotation every 23.9 hours. It takes 365.25 days to complete one trip around the Sun. That extra quarter of a day presents a challenge to our calendar system, which counts one year as 365 days. To keep our yearly calendars consistent with our orbit around the Sun, every four years we add one day. That day is called a leap day, and the year it's added to is called a leap year. Earth's axis of rotation is tilted 23.4 degrees with respect to the plane of Earth's orbit around the Sun. This tilt causes our yearly cycle of seasons. During part of the year, the northern hemisphere is tilted toward the Sun and the southern hemisphere is tilted away. With the Sun higher in the sky, solar heating is greater in the north producing summer there. Less direct solar heating produces winter in the south. Six months later, the situation is reversed. When spring and fall begin, both hemispheres receive roughly equal amounts of heat from the Sun.",

    formation: "Earth has a central core, a rocky mantle and a solid crust.",

    life: "Earth has a very hospitable temperature and mix of chemicals that have made life possible here. Most notably, Earth is unique in that most of our planet is covered in water, since the temperature allows liquid water to exist for extended periods of time. Earth's vast oceans provided a convenient place for life to begin about 3.8 billion years ago."
  },

  {
    name: 'Mars',
    radius: '3,390 kilometers',
    dfe: '54.6 million kilometers',

    picture:'https://solarsystem.nasa.gov/system/resources/detail_files/683_6453_mars-globe-valles-marineris-enhanced-full2.jpg',

    summary: "Mars is the fourth planet from the Sun. Mars is a dusty, cold, desert world with a very thin atmosphere. This dynamic planet has seasons, polar ice caps, extinct volcanoes, canyons and weather. Mars is one of the most explored bodies in our solar system, and it's the only planet where we've sent rovers to roam the alien landscape. NASA missions have found lots of evidence that Mars was much wetter and warmer, with a thicker atmosphere, billions of years ago. Today it is frequently called the Red Planet because iron minerals in the Martian dirt oxidize, or rust, causing the surface to look red. Mars is about half the size of Earth. It takes sunlight 13 minutes to travel from the Sun to Mars.",

    orbitAndRotation: "As Mars orbits the Sun, it completes one rotation every 24.6 hours, which is very similar to one day on Earth (23.9 hours). Martian days are called sols—short for solar day. A year on Mars lasts 669.6 sols, which is the same as 687 Earth days. Mars axis of rotation is tilted 25 degrees with respect to the plane of its orbit around the Sun. This is another similarity with Earth, which has an axial tilt of 23.4 degrees. Like Earth, Mars has distinct seasons, but they last longer than seasons here on Earth since Mars takes longer to orbit the Sun (because it's farther away). On Mars the seasons vary in length because of Mars elliptical, egg-shaped orbit around the Sun. Spring in the northern hemisphere (autumn in the southern) is the longest season at 194 sols. Autumn in the northern hemisphere (spring in the southern) is the shortest at 142 days. Northern winter/southern summer is 154 sols, and northern summer/southern winter is 178 sols.",

    formation: "Mars is about half the size of Earth, and like its fellow terrestrial planets, it has a central core, a rocky mantle and a solid crust.",

    life: "Scientists don't expect to find living things currently thriving on Mars. Instead, they're looking for signs of life that existed long ago, when Mars was warmer and covered with water."
  },

  {
    name: 'Jupiter',
    radius: '69,911 kilometers',
    dfe: '588 million kilometers',

    picture:'https://solarsystem.nasa.gov/system/resources/detail_files/113_PIA02873.jpg',
    gif: 'https://i.giphy.com/media/l0HlJaqSZ9GcjUKys/giphy.webp',

    summary: "Jupiter is the fifth planet from our Sun and is, by far, the largest planet in the solar system – more than twice as massive as all the other planets combined. Jupiter's stripes and swirls are actually cold, windy clouds of ammonia and water, floating in an atmosphere of hydrogen and helium. Jupiter’s iconic Great Red Spot is a giant storm bigger than Earth that has raged for hundreds of years. Jupiter is surrounded by more than 65 known moons. The four largest moons were discovered by Galileo Galilei in 1610: Io, Europa, Ganymede and Callisto. Jupiter also has several rings, but unlike the rings of Saturn, Jupiter’s rings are very faint and made of dust, not ice. It takes Sunlight 43 minutes to travel from the Sun to Jupiter.",

    orbitAndRotation: "Jupiter has the shortest day in the solar system. One day on Jupiter takes only about 10 hours (the time it takes for Jupiter to rotate or spin around once), and Jupiter makes a complete orbit around the Sun (a year in Jovian time) in about 12 Earth years (4,333 Earth days). Its equator is tilted with respect to its orbital path around the Sun by just 3 degrees. This means Jupiter spins nearly upright and does not have seasons as extreme as other planets do.",

    formation: "Jupiter took most of the mass left over after the formation of the Sun, ending up with more than twice the combined material of the other bodies in the solar system. In fact, Jupiter has the same ingredients as a star, but it did not grow massive enough to ignite. Jupiter is the fifth planet from the Sun.",

    life: "Jupiter’s environment is probably not conducive to life as we know it. The temperatures, pressures and materials that characterize this planet are most likely too extreme and volatile for organisms to adapt to. While planet Jupiter is an unlikely place for living things to take hold, the same is not true of some of its many moons. Europa is one of the likeliest places to find life elsewhere in our solar system. There is evidence of a vast ocean just beneath its icy crust, where life could possibly be supported. With four large moons and many smaller moons, Jupiter forms a kind of miniature solar system. Jupiter has 53 confirmed moons, as well as 14 provisional ones. The four largest moons are known today as the Galilean satellites, and they're some of the most fascinating destinations in our solar system. Io is the most volcanically active body in the solar system. Ganymede is the largest moon in the solar system (even bigger than the planet Mercury). Callisto’s very few small craters indicate a small degree of current surface activity. A liquid-water ocean with the ingredients for life may lie beneath the frozen crust of Europa, making it a tempting place to explore."
  },

  {
    name: 'Saturn',
    radius: '58,232 kilometers)',
    dfe: '1.7 billion kilometers',

    picture:'https://solarsystem.nasa.gov/system/resources/detail_files/210_SaturnNorthernSummer1200w.jpg',
    gif: 'https://i.imgur.com/d7YF6kg.gif',

    summary: "Saturn is the sixth planet from the Sun and the second largest planet in our solar system. Adorned with a dazzling system of icy rings, Saturn is unique among the planets. It is not the only planet to have rings, but none are as spectacular or as complex as Saturn's. Like fellow gas giant Jupiter, Saturn is a massive ball made mostly of hydrogen and helium. Surrounded by more than 60 known moons, Saturn is home to some of the most fascinating landscapes in our solar system. From the jets of water that spray from Enceladus to the methane lakes on smoggy Titan, the Saturn system is a rich source of scientific discovery and still holds many mysteries. The farthest planet from Earth discovered by the unaided human eye, Saturn has been known since ancient times. Saturn is 9 times wider than Earth. It takes sunlight 80 minutes to travel from the Sun to Saturn.",

    orbitAndRotation: "Saturn has the second-shortest day in the solar system. One day on Saturn takes only 10.7 hours (the time it takes for Saturn to rotate or spin around once), and Saturn makes a complete orbit around the Sun (a year in Saturnian time) in about 29.4 Earth years (10,756 Earth days). Its axis is tilted by 26.73 degrees with respect to its orbit around the Sun, which is similar to Earth's 23.5-degree tilt. This means that, like Earth, Saturn experiences seasons.",

    formation: "Like Jupiter, Saturn is mostly made of hydrogen and helium, the same two main components that make up the Sun.",

    life: "Saturn's environment is not conducive to life as we know it. The temperatures, pressures and materials that characterize this planet are most likely too extreme and volatile for organisms to adapt to. While planet Saturn is an unlikely place for living things to take hold, the same is not true of some of its many moons. Satellites like Enceladus and Titan, home to internal oceans, could possibly support life."
  },

  {
    name: 'Uranus',
    radius: '25,362 kilometers',
    dfe: '2.6 billion kilometers',

    picture:'https://solarsystem.nasa.gov/system/resources/detail_files/599_PIA18182.jpg',

    summary: "The seventh planet from the Sun with the third largest diameter in our solar system, Uranus is very cold and windy. The ice giant is surrounded by 13 faint rings and 27 small moons as it rotates at a nearly 90-degree angle from the plane of its orbit. This unique tilt makes Uranus appear to spin on its side, orbiting the Sun like a rolling ball. The first planet found with the aid of a telescope, Uranus was discovered in 1781 by astronomer William Herschel. Uranus is 4 times wider than Earth. It takes sunlight 2 hours and 40 minutes to travel from the Sun to Uranus.",

    orbitAndRotation: "One day on Uranus takes about 17 hours (the time it takes for Uranus to rotate or spin once). And Uranus makes a complete orbit around the Sun (a year in Uranian time) in about 84 Earth years (30,687 Earth days). Uranus is the only planet whose equator is nearly at a right angle to its orbit, with a tilt of 97.77 degrees—possibly the result of a collision with an Earth-sized object long ago. This unique tilt causes the most extreme seasons in the solar system. For nearly a quarter of each Uranian year, the Sun shines directly over each pole, plunging the other half of the planet into a 21-year-long, dark winter. Uranus is also one of just two planets that rotate in the opposite direction than most of the planets (Venus is the other one), from east to west.",

    formation: "Like its neighbor Neptune, Uranus likely formed closer to the Sun and moved to the outer solar system about 4 billion years ago, where it is the seventh planet from the Sun.",

    life: "Uranus' environment is not conducive to life as we know it. The temperatures, pressures and materials that characterize this planet are most likely too extreme and volatile for organisms to adapt to."
  },

  {
    name: 'Neptune',
    radius: '24,622 kilometers',
    dfe: '4.3 billion kilometers',

    picture:'https://solarsystem.nasa.gov/system/resources/detail_files/611_PIA01492.jpg',

    summary: "Dark, cold and whipped by supersonic winds, ice giant Neptune is the eighth and most distant planet in our solar system. More than 30 times as far from the Sun as Earth, Neptune is the only planet in our solar system not visible to the naked eye. In 2011 Neptune completed its first 165-year orbit since its discovery in 1846. Neptune is so far from the Sun that high noon on the big blue planet would seem like dim twilight to us. The warm light we see here on our home planet is roughly 900 times as bright as sunlight on Neptune. The ice giant Neptune was the first planet located through mathematical calculations. Neptune is about four times wider than Earth. It takes sunlight 4 hours to travel from the Sun to Neptune.",

    orbitAndRotation: "One day on Neptune takes about 16 hours (the time it takes for Neptune to rotate or spin once). And Neptune makes a complete orbit around the Sun (a year in Neptunian time) in about 165 Earth years (60,190 Earth days). Sometimes Neptune is even farther from the Sun than dwarf planet Pluto. Pluto's highly eccentric, oval-shaped orbit brings it inside Neptune's orbit for a 20-year period every 248 Earth years. This switch, in which Pluto is closer to the Sun than Neptune, happened most recently from 1979 to 1999. Pluto can never crash into Neptune, though, because for every three laps Neptune takes around the Sun, Pluto makes two. This repeating pattern prevents close approaches of the two bodies. Neptune’s axis of rotation is tilted 28 degrees with respect to the plane of its orbit around the Sun, which is similar to the axial tilts of Mars and Earth. This means that Neptune experiences seasons just like we do on Earth; however, since its year is so long, each of the four seasons lasts for over 40 years.",

    formation: "Like its neighbor Uranus, Neptune likely formed closer to the Sun and moved to the outer solar system about 4 billion years ago.",

    life: "Neptune's environment is not conducive to life as we know it. The temperatures, pressures and materials that characterize this planet are most likely too extreme and volatile for organisms to adapt to."
  },

  {
    name: 'Pluto',
    radius: '1,151 kilometers',
    dfe: '7.5 billion kilometers',

    picture:'https://solarsystem.nasa.gov/system/resources/detail_files/855_pluto_lorri_ralph_20150713_2017.jpg',

    summary: "Pluto is a complex and mysterious world with mountains, valleys, plains, craters, and maybe glaciers. Discovered in 1930, Pluto was long considered our solar system's ninth planet. But after the discovery of similar intriguing worlds deeper in the distant Kuiper Belt, icy Pluto was reclassified as a dwarf planet. Pluto is orbited by five known moons, the largest of which is Charon. Charon is about half the size of Pluto itself, making it the largest satellite relative to the planet it orbits in our solar system. Pluto and Charon are often referred to as a double planet. Pluto is about 1/6 the width of Earth. If Earth was the size of a nickel, Pluto would be about as big as a popcorn kernel. It takes sunlight 5.5 hours to travel from the sun to Pluto. If you were to stand on the surface of Pluto at noon, the sun would be 1/900 the brightness it is here on Earth, or about 300 times as bright as our full moon. There is a moment each day near sunset here on Earth when the light is the same brightness as midday on Pluto.",

    orbitAndRotation: "Pluto's orbit around the sun is unusual compared to the planets: it's both elliptical and tilted. Pluto's 248-year-long, oval-shaped orbit can take it as far as 49.3 astronomical units (AU) from the sun, and as close as 30 AU. (One AU is the mean distance between Earth and the sun: about 93 million miles or 150 million kilometers.) But on average, Pluto is 3.7 billion miles (5.9 billion kilometers) away from the sun, or 39 AU. From 1979 to 1999, Pluto was near perihelion, when it is closest to the sun. During this time, Pluto was actually closer to the sun than Neptune. One day on Pluto takes about 153 hours. Its axis of rotation is tilted 57 degrees with respect to the plane of its orbit around the sun, so it spins almost on its side. Pluto also exhibits a retrograde rotation; spinning from east to west like Venus and Uranus.",

    formation: "Dwarf planet Pluto is a member of a group of objects that orbit in a disc-like zone beyond the orbit of Neptune called the Kuiper Belt. This distant realm is populated with thousands of miniature icy worlds, which formed early in the history of our solar system about 4.5 billion years ago. These icy, rocky bodies are called Kuiper Belt objects, transneptunian objects, or plutoids.",

    life: "The surface of Pluto is extremely cold, so it seems unlikely that life could exist there. At such cold temperatures, water, which is vital for life as we know it, is essentially rock-like. Pluto's interior is warmer, however, and some think there could even be an ocean deep inside."
  },

  {
    name: 'Planet X',
    radius: 'Unknown',
    dfe: 'Unknown',

    picture:'https://img.gazeta.ru/files3/619/8032619/Planet-9-pic905-895x505-95298.jpg',

    summary: "In January 2015, Caltech astronomers Konstantin Batygin and Mike Brown announced new research that provides evidence of a giant planet tracing an unusual, elongated orbit in the outer solar system. The prediction is based on detailed mathematical modeling and computer simulations, not direct observation. This large object could explain the unique orbits of at least five smaller objects discovered in the distant Kuiper Belt. The possibility of a new planet is certainly an exciting one for me as a planetary scientist and for all of us, said Jim Green, director of NASA's Planetary Science Division. This is not, however, the detection or discovery of a new planet. It's too early to say with certainty there's a so-called Planet X. What we're seeing is an early prediction based on modeling from limited observations. It's the start of a process that could lead to an exciting result. The Caltech scientists believe Planet X may have has a mass about 10 times that of Earth and be similar in size to Uranus or Neptune. ",

    orbitAndRotation: "The predicted orbit is about 20 times farther from our sun on average than Neptune (which orbits the sun at an average distance of 2.8 billion miles). It would take this new planet between 10,000 and 20,000 years to make just one full orbit around the sun (where Neptune completes an orbit roughly every 165 years).",

    formation: "This hypothetical Neptune-sized planet orbits our sun in a highly elongated orbit far beyond Pluto. The object, which the researchers have nicknamed Planet Nine, could have a mass about 10 times that of Earth and orbit about 20 times farther from the sun on average than Neptune. It may take between 10,000 and 20,000 Earth years to make one full orbit around the sun. The announcement does not mean there is a new planet in our solar system. The existence of this distant world is only theoretical at this point and no direct observation of the object nicknamed have been made. The mathematical prediction of a planet could explain the unique orbits of some smaller objects in the Kuiper Belt, a distant region of icy debris that extends far beyond the orbit of Neptune. Astronomers are now searching for the predicted planet.",

    life: "Unknown"
  }
]);
