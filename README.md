# MusicBotWithFilters
A Noob Music Bot 

[![Music-Bot-With-Filters-v2](https://github-readme-stats.vercel.app/api/pin/?username=navaneethkm004&repo=Music-Bot-With-Filters-v2&theme=dark)](https://github.com/StaticGamerYT-India/Music-Bot-For-Discord)<br/>

An advanced Music Bot, with 30+ Radio Stations, with capability of filters, like Bassboost, Nightcore, etc. and reaction interactivity. Based on ytdl-core with discord.js Guide Handler. With ideas from eritislami 

## LICENSE
 
    An advanced Music Bot, with 30+ Radio Stations, with capability of filters, like Bassboost, Nightcore, etc. and reaction interactivity. Based on ytdl-core with discord.js       Guide Handler. With ideas from eritislami.
    Copyright (C) 2020  Navaneeth K M

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.


### **IMPORTANT!** 

If you decide to use this Bot, [check out this Github repo first](https://github.com/StaticGamerYT-India/Music-Bot-For-Discord) cause this is the same exact Bot with standard Discord/Unicode Emojis, which means that you can just simply use it instantly without changing the emojis!

#### Commands:

- `filter <FILTERNAME>` --    *Set Audio - Effects*
- `loop`                --    *Toggle music loop*
- `lyrics`              --    *Get lyrics for the currently playing song*
- `nowplaying`          --    *Show current song*
- `pause`               --    *Pause the currently playing music*
- `play <TITEL | URL>`  --    *Plays song from YouTube/Stream*
- `queue`               --    *Show the music queue and now playing*
- `radio <RADIOSTATION>`--    *Play a Radiostation*
- `remove`              --    *Remove song from the queue*
- `resume`              --    *Resume currently playing music*
- `search <TITEL | URL>`--    *Search and select videos to play*
- `shuffle`             --    *Shuffles the current Queue!*
- `skip`                --    *Skip the currently playing song*
- `skipto <QUEUE NUM.>` --    *Skip to the selected queue number*
- `stop`                --    *Stops the music*
- `volume <VOL. NUM.>`  --    *Change volume*
- `help [COMMAND]`      --    *Gives you a list of all help Commands*

**NO API-KEY NEEDED!** That's because it uses a scraper (`youtube-sr`)!

## Installation | How to use the Bot

 **1.** Install [node.js v12](https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode) or higher

 **2.** Install [ffmpeg@latest](https://ffmpeg.org) 

 **3.** Download this repo and unzip it    |    or git clone it
 
 **4.** Install all of the packages with **`npm install`**     |  the packages are   **`npm install node.js @discordjs/opus discord.js ffmpeg-static figlet lyrics-finder string-progressbar ytdl-core discord-ytdl-core youtube-sr`**
 
 **5.** start the bot with **`node index.js`**<br/>
 
 [![Run on Repl.it](https://repl.it/github/StaticGamerYT-India/Music-Bot-For-Discord](https://repl.it/github/StaticGamerYT-India/Music-Bot-For-Discord)</br>


Please subscribe my YT channel and like the video.

<a href="https://www.youtube.com/channel/UCSqkMUjNAYX9m15ZMF60ClA?sub_confirmation=1" target="_blank" style="display: inline-block;">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/YouTube_social_white_circle_(2017).svg/1024px-YouTube_social_white_circle_(2017).svg.png" 
                    align="center"
                />
 </a>




## Usage - config.json

```json
{
  "TOKEN": "",
  "PREFIX": "+",
  "approveemoji": "EMOJIID",
  "denyemoji": "EMOJIID",
  "erroremoji": "EMOJIID"
}
```

It is important that you fill in every item of the JSON FILE! every emoji used in this BOT is a custom emoji, the emojis are listed down below as images, which you can download and upload to your server to use them. NOTE: you gotta change emoji.id to emoji.name if you use discord / unicode emojis! Soon a new Repo with standard emojis will be awailable for easy usages!

## **NOTE:**

*Make sure that you have installed [FFmpeg](https://ffmpeg.org), and added it to Systemenvironment variables (PATH)*

*If you are having errors/problems with starting delete the package.json file and do, before you install the packages `npm init`*

## SUPPORT ME

<div align="center">
            <a href="https://www.youtube.com/channel/UCSqkMUjNAYX9m15ZMF60ClA?sub_confirmation=1" target="_blank" style="display: inline-block;">
                <img
                    src="https://1000logos.net/wp-content/uploads/2017/05/youtube-symbol.jpg" 
                    align="center"
                />
            </a></div>
            
 
