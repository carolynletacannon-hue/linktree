export type Release = { id:string; title:string; artist:string; meta:string; artwork:string; audio:string; links: Record<string,string> };
// REPLACE: artwork and audio URLs below with Carolyn's mastered assets and preview clips.
export const releases: Release[] = [
 {id:'castlemania',title:'Castlemnis',artist:'Carolyn Cannon',meta:'Single · 2023',artwork:'/assets/cover-castlemnis.svg',audio:'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',links:{Spotify:'https://open.spotify.com/track/4NkuUCjZrk1uZscvjpOPGW?si=4c1446c0568a4ca5',Apple:'https://music.apple.com/us/album/castlemania/1694488108?i=1694488111',Amazon:'https://music.amazon.com/tracks/B0C9JKBJLS?marketplaceId=ATVPDKIKX0DER&musicTerritory=US',YouTube:'https://youtu.be/3ff9qCm8q00?si=564M9ZJrfJfhWXE2'}},
 {id:'afterlight',title:'Afterlight',artist:'Carolyn Cannon',meta:'Single · Coming soon',artwork:'/assets/cover-afterlight.svg',audio:'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',links:{}},
 {id:'mercy',title:'A Little Mercy',artist:'Carolyn Cannon',meta:'Single · Coming soon',artwork:'/assets/cover-mercy.svg',audio:'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',links:{}},
];
