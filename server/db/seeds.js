use space_hub;
db.dropDatabase();

db.planets.insertMany([
  {
    name: 'Sun',
    age: '4.5 billion years',
    dfe: '149.60 million kilometers',
    picture: 'https://solarsystem.nasa.gov/system/resources/detail_files/768_oct_1_2015_flare.jpg',
    summary: 'The Sun is a yellow dwarf star, a hot ball of glowing gases at the heart of our solar system. Its gravity holds the solar system together, keeping everything – from the biggest planets to the smallest particles of debris – in its orbit. The connection and interactions between the Sun and Earth drive the seasons, ocean currents, weather, climate, radiation belts and auroras. Though it is special to us, there are billions of stars like our Sun scattered across the Milky Way galaxy. The Sun has many names in many cultures. The Latin word for Sun is "sol", which is the main adjective for all things Sun-related: solar.',
    sizeAndDistance: 'With a radius of 432,168.6 miles (695,508 kilometers), our Sun is not an especially large star—many are several times bigger—but it is still far more massive than our home planet: 332,946 Earths match the mass of the Sun. The Sun’s volume would need 1.3 million Earths to fill it. The Sun is 93 million miles (150,000 kilometers) from Earth. Its nearest stellar neighbor is the Alpha Centauri triple star system: Proxima Centauri is 4.24 light years away, and Alpha Centauri A and B—two stars orbiting each other—are 4.37 light years away. A light year is the distance light travels in one year, which is equal to 5,878,499,810,000 miles or 9,460,528,400,000 kilometers.',
    orbitAndRotation: 'The Sun, and everything that orbits it, is located in the Milky Way galaxy. More specifically, our Sun is in a spiral arm called the Orion Spur that extends outward from the Sagittarius arm. From there, the Sun orbits the center of the Milky Way Galaxy, bringing the planets, asteroids, comets and other objects along with it. Our solar system is moving with an average velocity of 450,000 miles per hour (720,000 kilometers per hour). But even at this speed, it takes us about 230 million years to make one complete orbit around the Milky Way. The Sun rotates as it orbits the center of the Milky Way. Its spin has an axial tilt of 7.25 degrees with respect to the plane of the planets’ orbits. Since the Sun is not a solid body, different parts of the Sun rotate at different rates. At the equator, the Sun spins around once about every 25 days, but at its poles the Sun rotates once on its axis every 36 Earth days.',
    formation: 'The Sun and the rest of the solar system formed from a giant, rotating cloud of gas and dust called a solar nebula about 4.5 billion years ago. As the nebula collapsed because of its overwhelming gravity, it spun faster and flattened into a disk. Most of the material was pulled toward the center to form our Sun, which accounts for 99.8% of the mass of the entire solar system. Like all stars, the Sun will someday run out of energy. When the Sun starts to die, it will swell so big that it will engulf Mercury and Venus and maybe even Earth. Scientists predict the Sun is a little less than halfway through its lifetime and will last another 6.5 billion years before it shrinks down to be a white dwarf.',
    life: 'The Sun itself is not a good place for living things, with its hot, energetic mix of gases and plasma. But the Sun has made life on Earth possible, providing warmth as well as energy that organisms like plants use to form the basis of many food chains.'
  },
  {
    name: 'Mercury',
    age: '4.5 billion years',
    dfe: '77 million kilometers',

    picture: 'https://solarsystem.nasa.gov/system/resources/detail_files/771_PIA16853.jpg',

    summary: "The smallest planet in our solar system and nearest to the Sun, Mercury is only slightly larger than Earth's Moon. From the surface of Mercury, the Sun would appear more than three times as large as it does when viewed from Earth, and the sunlight would be as much as 11 times brighter. Despite its proximity to the Sun, Mercury is not the hottest planet in our solar system – that title belongs to nearby Venus, thanks to its dense atmosphere. But Mercury is the fastest planet, zipping around the Sun every 88 Earth days. Mercury is appropriately named for the swiftest of the ancient Roman gods.",

    sizeAndDistance: 'With a radius of 1,516 miles (2,440 kilometers), Mercury is a little more than 1/3 the width of Earth. If Earth were the size of a nickel, Mercury would be about as big as a blueberry. From an average distance of 36 million miles (58 million kilometers), Mercury is 0.4 astronomical units away from the Sun. One astronomical unit (abbreviated as AU), is the distance from the Sun to Earth. From this distance, it takes sunlight 3.2 minutes to travel from the Sun to Mercury.',

    orbitAndRotation: "Mercury's highly eccentric, egg-shaped orbit takes the planet as close as 29 million miles (47 million kilometers) and as far as 43 million miles (70 million kilometers) from the Sun. It speeds around the Sun every 88 days, traveling through space at nearly 29 miles (47 kilometers) per second, faster than any other planet.Mercury spins slowly on its axis and completes one rotation every 59 Earth days. But when Mercury is moving fastest in its elliptical orbit around the Sun (and it is closest to the Sun), each rotation is not accompanied by a sunrise and sunset like it is on most other planets. The morning Sun appears to rise briefly, set and rise again from some parts of the planet's surface. The same thing happens in reverse at sunset for other parts of the surface. One Mercury solar day (one full day-night cycle) equals 176 Earth days—just over two years on Mercury.",

    formation: 'Mercury formed about 4.5 billion years ago when gravity pulled swirling gas and dust together to form this small planet nearest the Sun. Like its fellow terrestrial planets, Mercury has a central core, a rocky mantle and a solid crust.',

    life: "Mercury's environment is not conducive to life as we know it. The temperatures and solar radiation that characterize this planet are most likely too extreme for organisms to adapt to."
  },
  {
    name: 'Venus',
    age: '4.5 billion years',
    dfe: '40 million kilometers',

    picture: 'https://solarsystem.nasa.gov/system/resources/detail_files/688_Venus.jpg',

    summary: "Venus is the second planet from the Sun and our closest planetary neighbor. Similar in structure and size to Earth, Venus spins slowly in the opposite direction from most planets. Its thick atmosphere traps heat in a runaway greenhouse effect, making it the hottest planet in our solar system with surface temperatures hot enough to melt lead. Glimpses below the clouds reveal volcanoes and deformed mountains.Venus is named for the ancient Roman goddess of love and beauty, who was known as Aphrodite to the Ancient Greeks.",

    sizeAndDistance: 'With a radius of 3,760 miles (6,052 kilometers), Venus is roughly the same size as Earth — just slightly smaller. From an average distance of 67 million miles (108 million kilometers), Venus is 0.7 astronomical units away from the Sun. One astronomical unit (abbreviated as AU), is the distance from the Sun to Earth. It takes sunlight 6 minutes to travel from the Sun to Venus.',

    orbitAndRotation: "Venus rotation and orbit are unusual in several ways. Venus is one of just two planets that rotate from east to west. Only Venus and Uranus have this backwards rotation. It completes one rotation in 243 Earth days — the longest day of any planet in our solar system, even longer than a whole year on Venus. But the Sun doesn't rise and set each day on Venus like it does on most other planets. On Venus, one day-night cycle takes 117 Earth days because Venus rotates in the direction opposite of its orbital revolution around the Sun. Venus makes a complete orbit around the Sun (a year in Venusian time) in 225 Earth days or slightly less than two Venusian day-night cycles. Its orbit around the Sun is the most circular of any planet — nearly a perfect circle. Other planet's orbits are more elliptical, or oval-shaped. With an axial tilt of just 3 degrees, Venus spins nearly upright, and so does not experience noticeable seasons.",

    formation: 'When the solar system settled into its current layout about 4.5 billion years ago, Venus formed when gravity pulled swirling gas and dust together to form the second planet from the Sun. Like its fellow terrestrial planets, Venus has a central core, a rocky mantle and a solid crust.',

    life: "No human has visited Venus, but the spacecraft that have been sent to the surface of Venus do not last very long there. Venus' high surface temperatures overheat electronics in spacecraft in a short time, so it seems unlikely that a person could survive for long on the Venusian surface. There is speculation about life existing in Venus' distant past, as well as questions about the possibility of life in the top cloud layers of Venus' atmosphere, where the temperatures are less extreme."
  },
  {
    name: 'Earth',
    age: '3.8 billion years',
    dfe: '0 kilometers',

    picture: 'https://solarsystem.nasa.gov/system/resources/detail_files/786_1-bluemarble_west.jpg',

    summary: "Our home planet is the third planet from the Sun, and the only place we know of so far that’s inhabited by living things. While Earth is only the fifth largest planet in the solar system, it is the only world in our solar system with liquid water on the surface. Just slightly larger than nearby Venus, Earth is the biggest of the four planets closest to the Sun, all of which are made of rock and metal. The name Earth is at least 1,000 years old. All of the planets, except for Earth, were named after Greek and Roman gods and goddesses. However, the name Earth is a Germanic word, which simply means the ground.",

    sizeAndDistance: "With a radius of 3,959 miles (6,371 kilometers), Earth is the biggest of the terrestrial planets, and the fifth largest planet overall. From an average distance of 93 million miles (150 million kilometers), Earth is exactly one astronomical unit away from the Sun because one astronomical unit (abbreviated as AU), is the distance from the Sun to Earth. This unit provides an easy way to quickly compare planets' distances from the Sun. It takes about eight minutes for light from the Sun to reach our planet.",

    orbitAndRotation: "As Earth orbits the Sun, it completes one rotation every 23.9 hours. It takes 365.25 days to complete one trip around the Sun. That extra quarter of a day presents a challenge to our calendar system, which counts one year as 365 days. To keep our yearly calendars consistent with our orbit around the Sun, every four years we add one day. That day is called a leap day, and the year it's added to is called a leap year. Earth's axis of rotation is tilted 23.4 degrees with respect to the plane of Earth's orbit around the Sun. This tilt causes our yearly cycle of seasons. During part of the year, the northern hemisphere is tilted toward the Sun and the southern hemisphere is tilted away. With the Sun higher in the sky, solar heating is greater in the north producing summer there. Less direct solar heating produces winter in the south. Six months later, the situation is reversed. When spring and fall begin, both hemispheres receive roughly equal amounts of heat from the Sun.",

    formation: "When the solar system settled into its current layout about 4.5 billion years ago, Earth formed when gravity pulled swirling gas and dust in to become the third planet from the Sun. Like its fellow terrestrial planets, Earth has a central core, a rocky mantle and a solid crust.",

    life: "Earth has a very hospitable temperature and mix of chemicals that have made life possible here. Most notably, Earth is unique in that most of our planet is covered in water, since the temperature allows liquid water to exist for extended periods of time. Earth's vast oceans provided a convenient place for life to begin about 3.8 billion years ago. Some of the features of our planet that make it great for sustaining life are changing due to the ongoing effects of climate change."
  },

  {
    name: 'Mars',
    age: '4.5 billion years',
    dfe: '54.6 million kilometers',

    picture:'https://solarsystem.nasa.gov/system/resources/detail_files/683_6453_mars-globe-valles-marineris-enhanced-full2.jpg',

    summary: "The fourth planet from the Sun, Mars is a dusty, cold, desert world with a very thin atmosphere. This dynamic planet has seasons, polar ice caps, extinct volcanoes, canyons and weather. Mars is one of the most explored bodies in our solar system, and it's the only planet where we've sent rovers to roam the alien landscape. NASA missions have found lots of evidence that Mars was much wetter and warmer, with a thicker atmosphere, billions of years ago. Mars was named by the Romans for their god of war because its reddish color was reminiscent of blood. Other civilizations also named the planet for this attribute; for example, the Egyptians called it Her Desher, meaning the red one. Even today, it is frequently called the Red Planet because iron minerals in the Martian dirt oxidize, or rust, causing the surface to look red",

    sizeAndDistance: "With a radius of 2,106 miles (3,390 kilometers), Mars is about half the size of Earth. If Earth were the size of a nickel, Mars would be about as big as a raspberry. From an average distance of 142 million miles (228 million kilometers), Mars is 1.5 astronomical units away from the Sun. One astronomical unit (abbreviated as AU), is the distance from the Sun to Earth. From this distance, it takes sunlight 13 minutes to travel from the Sun to Mars.",

    orbitAndRotation: "As Mars orbits the Sun, it completes one rotation every 24.6 hours, which is very similar to one day on Earth (23.9 hours). Martian days are called sols—short for solar day. A year on Mars lasts 669.6 sols, which is the same as 687 Earth days. Mars axis of rotation is tilted 25 degrees with respect to the plane of its orbit around the Sun. This is another similarity with Earth, which has an axial tilt of 23.4 degrees. Like Earth, Mars has distinct seasons, but they last longer than seasons here on Earth since Mars takes longer to orbit the Sun (because it's farther away). And while here on Earth the seasons are evenly spread over the year, lasting 3 months (or one quarter of a year), on Mars the seasons vary in length because of Mars elliptical, egg-shaped orbit around the Sun. Spring in the northern hemisphere (autumn in the southern) is the longest season at 194 sols. Autumn in the northern hemisphere (spring in the southern) is the shortest at 142 days. Northern winter/southern summer is 154 sols, and northern summer/southern winter is 178 sols.",

    formation: "When the solar system settled into its current layout about 4.5 billion years ago, Mars formed when gravity pulled swirling gas and dust in to become the fourth planet from the Sun. Mars is about half the size of Earth, and like its fellow terrestrial planets, it has a central core, a rocky mantle and a solid crust.",

    life: "Scientists don't expect to find living things currently thriving on Mars. Instead, they're looking for signs of life that existed long ago, when Mars was warmer and covered with water."
  },

  {
    name: 'Jupiter',
    age: '4.5 billion years',
    dfe: '588 million kilometers',

    picture:'https://solarsystem.nasa.gov/system/resources/detail_files/113_PIA02873.jpg',

    summary: "Jupiter is the fifth planet from our Sun and is, by far, the largest planet in the solar system – more than twice as massive as all the other planets combined. Jupiter's stripes and swirls are actually cold, windy clouds of ammonia and water, floating in an atmosphere of hydrogen and helium. Jupiter’s iconic Great Red Spot is a giant storm bigger than Earth that has raged for hundreds of years. Jupiter is surrounded by more than 65 known moons. Scientists are most interested in the Galilean satellites – the four largest moons discovered by Galileo Galilei in 1610: Io, Europa, Ganymede and Callisto. Jupiter also has several rings, but unlike the famous rings of Saturn, Jupiter’s rings are very faint and made of dust, not ice. Jupiter is named for the king of the ancient Roman gods.​",

    sizeAndDistance: "With a radius of 43,440.7 miles (69,911 kilometers), Jupiter is 11 times wider than Earth. If Earth were the size of a nickel, Jupiter would be about as big as a basketball. From an average distance of 484 million miles (778 million kilometers), Jupiter is 5.2 astronomical units away from the Sun. One astronomical unit (abbreviated as AU), is the distance from the Sun to Earth. From this distance, it takes Sunlight 43 minutes to travel from the Sun to Jupiter.",

    orbitAndRotation: "Jupiter has the shortest day in the solar system. One day on Jupiter takes only about 10 hours (the time it takes for Jupiter to rotate or spin around once), and Jupiter makes a complete orbit around the Sun (a year in Jovian time) in about 12 Earth years (4,333 Earth days). Its equator is tilted with respect to its orbital path around the Sun by just 3 degrees. This means Jupiter spins nearly upright and does not have seasons as extreme as other planets do.",

    formation: "Jupiter took shape when the rest of the solar system formed about 4.5 billion years ago, when gravity pulled swirling gas and dust in to become this gas giant. Jupiter took most of the mass left over after the formation of the Sun, ending up with more than twice the combined material of the other bodies in the solar system. In fact, Jupiter has the same ingredients as a star, but it did not grow massive enough to ignite. About 4 billion years ago, Jupiter settled into its current position in the outer solar system, where it is the fifth planet from the Sun.",

    life: "Jupiter’s environment is probably not conducive to life as we know it. The temperatures, pressures and materials that characterize this planet are most likely too extreme and volatile for organisms to adapt to. While planet Jupiter is an unlikely place for living things to take hold, the same is not true of some of its many moons. Europa is one of the likeliest places to find life elsewhere in our solar system. There is evidence of a vast ocean just beneath its icy crust, where life could possibly be supported. With four large moons and many smaller moons, Jupiter forms a kind of miniature solar system. Jupiter has 53 confirmed moons, as well as 14 provisional ones. These newly discovered, provisional moons are reported by astronomers and acknowledged with a temporary designation by the International Astronomical Union. Once their orbits are confirmed, they are included in Jupiter's confirmed moon count. Jupiter's four largest moons—Io, Europa, Ganymede and Callisto—were first observed by the astronomer Galileo Galilei in 1610 using an early version of the telescope. These four moons are known today as the Galilean satellites, and they're some of the most fascinating destinations in our solar system. Io is the most volcanically active body in the solar system. Ganymede is the largest moon in the solar system (even bigger than the planet Mercury). Callisto’s very few small craters indicate a small degree of current surface activity. A liquid-water ocean with the ingredients for life may lie beneath the frozen crust of Europa, making it a tempting place to explore."
  },

  {
    name: 'Saturn',
    age: '4.5 billion years',
    dfe: '1.7 billion kilometers',

    picture:'https://solarsystem.nasa.gov/system/resources/detail_files/210_SaturnNorthernSummer1200w.jpg',

    summary: "Saturn is the sixth planet from the Sun and the second largest planet in our solar system. Adorned with a dazzling system of icy rings, Saturn is unique among the planets. It is not the only planet to have rings, but none are as spectacular or as complex as Saturn's. Like fellow gas giant Jupiter, Saturn is a massive ball made mostly of hydrogen and helium. Surrounded by more than 60 known moons, Saturn is home to some of the most fascinating landscapes in our solar system. From the jets of water that spray from Enceladus to the methane lakes on smoggy Titan, the Saturn system is a rich source of scientific discovery and still holds many mysteries. The farthest planet from Earth discovered by the unaided human eye, Saturn has been known since ancient times. The planet is named for the Roman god of agriculture and wealth, who was also the father of Jupiter.",

    sizeAndDistance: "With a radius of 36,183.7 miles (58,232 kilometers), Saturn is 9 times wider than Earth. If Earth were the size of a nickel, Saturn would be about as big as a volleyball. From an average distance of 886 million miles (1.4 billion kilometers), Saturn is 9.5 astronomical units away from the Sun. One astronomical unit (abbreviated as AU), is the distance from the Sun to Earth. From this distance, it takes sunlight 80 minutes to travel from the Sun to Saturn.",

    orbitAndRotation: "Saturn has the second-shortest day in the solar system. One day on Saturn takes only 10.7 hours (the time it takes for Saturn to rotate or spin around once), and Saturn makes a complete orbit around the Sun (a year in Saturnian time) in about 29.4 Earth years (10,756 Earth days). Its axis is tilted by 26.73 degrees with respect to its orbit around the Sun, which is similar to Earth's 23.5-degree tilt. This means that, like Earth, Saturn experiences seasons.",

    formation: "Saturn took shape when the rest of the solar system formed about 4.5 billion years ago, when gravity pulled swirling gas and dust in to become this gas giant. About 4 billion years ago, Saturn settled into its current position in the outer solar system, where it is the sixth planet from the Sun. Like Jupiter, Saturn is mostly made of hydrogen and helium, the same two main components that make up the Sun.",

    life: "Saturn's environment is not conducive to life as we know it. The temperatures, pressures and materials that characterize this planet are most likely too extreme and volatile for organisms to adapt to. While planet Saturn is an unlikely place for living things to take hold, the same is not true of some of its many moons. Satellites like Enceladus and Titan, home to internal oceans, could possibly support life."
  },
]);
