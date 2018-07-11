// import to make services
import { Injectable } from '@angular/core';
import { Heroe } from '../components/heroes/heroes.component';

// create a service with decorator
@Injectable()
export class HeroesService {

    // data from heroes
    private heroes: Heroe[] = [
        {
            name: 'Aquaman',
            bio: 'The most recognized power of Aquaman is the telepathic ability to communicate with marine life, which can summon great distances.',
            img: 'assets/img/aquaman.png',
            appearance: '1941-11-01',
            house: 'DC'
        },
        {
            name: 'Batman',
            bio: 'The main features of Batman are summarized in "physical dexterity, deductive skills and obsession." Most of the basic characteristics of the comics have varied due to the different interpretations they have given to the character.',
            img: 'assets/img/batman.png',
            appearance: '1939-05-01',
            house: 'DC'
        },
        {
            name: 'Daredevil',
            bio: 'Having lost sight, the remaining four senses of Daredevil were increased by radiation to superhuman levels, in the accident he had as a child. Despite its blindness, it can \'see\' through a \'sixth sense\' that serves as a radar similar to that of bats.',
            img: 'assets/img/daredevil.png',
            appearance: '1964-01-01',
            house: 'Marvel'
        },
        {
            name: 'Hulk',
            bio: 'Its main power is its ability to increase its strength to practically unlimited levels while increasing its fury. Depending on which Hulk personality is in charge at that moment (the Hulk Banner is the weakest, but it makes up for it with its intelligence).',
            img: 'assets/img/hulk.png',
            appearance: '1962-05-01',
            house: 'Marvel'
        },
        {
            name: 'Green Lantern',
            bio: 'Possessor of the ring of power that possesses the ability to create manifestations of solid light through the use of thought. It is fed by the Green Flame (revised by later writers as a mystical power called Starheart), a magical flame contained within an orb (the orb was actually a green metal meteorite that fell to Earth, which was found by a manufacturer of lamps called Chang).',
            img: 'assets/img/green-lantern.png',
            appearance: '1940-06-01',
            house: 'DC'
        },
        {
            name: 'Spider-Man',
            bio: 'After being bitten by a radioactive spider, he obtained the following superhuman powers, a great strength, agility, to be able to climb walls. The strength of Spider-Man allows you to lift 10 tons or more. Thanks to this great force Spider-Man can perform incredible jumps. An arachnid sense, which lets you know if a danger looms over it, before it happens. Sometimes this can lead Spider-Man to the source of danger.',
            img: 'assets/img/spiderman.png',
            appearance: '1962-08-01',
            house: 'Marvel'
        },
        {
            name: 'Wolverine',
            bio: 'In the fictional universe of Marvel, Wolverine has regenerative powers that can heal any wound, however deadly it may be, and that same power makes it immune to any disease on Earth and some extraterrestrials. It also possesses a superhuman strength, that although it is not compared with the one of other superheroes like Hulk, yes it surpasses the one of any human.',
            img: 'assets/img/wolverine.png',
            appearance: '1974-11-01',
            house: 'Marvel'
        },
        {
            name: 'Capitán América',
            bio: 'Vowing to serve his country any way he could, young Steve Rogers took the super soldier serum to become America one-man army. Fighting for the red, white and blue for over 60 years, Captain America is the living, breathing symbol of freedom and liberty.',
            img: 'assets/img/captain-america.png',
            appearance: '1941-11-01',
            house: 'Marvel'
        },
        {
            name: 'Iron-Man',
            bio: 'Wounded, captured and forced to build a weapon by his enemies, billionaire industrialist Tony Stark instead created an advanced suit of armor to save his life and escape captivity. Now with a new outlook on life, Tony uses his money and intelligence to make the world a safer, better place as Iron Man.',
            img: 'assets/img/ironman.png',
            appearance: '1963-11-01',
            house: 'Marvel'
        },
        {
            name: 'The Flash',
            bio: 'Young Barry Allen’s life stopped the minute his mother was murdered. The true killer never found, its mystery obsessed Barry, driving him to become a forensic scientist. Consumed by his work, he spent his life chained to his desk, solving every case that flew across it. But when a freak lightning bolt hits a nearby shelf in his lab, Barry receives super-speed, becoming the Flash.',
            img: 'assets/img/flash.png',
            appearance: '1940-11-01',
            house: 'DC'
        },
        {
            name: 'Superman',
            bio: 'The most recognized superhero in pop culture, Superman has been elevated to mythic folkhero status. Rocketed to Earth from the dying planet Krypton, baby Kal-El was found by a farming couple who named the boy Clark Kent and raised him as their own. Discovering his enormous powers, they instilled in him strong moral values—and inspired him to become a hero.',
            img: 'assets/img/superman.png',
            appearance: '1938-11-01',
            house: 'DC'
        },
        {
            name: 'Cyclops',
            bio: 'Cyclops possesses the mutant ability to project a beam of heatless ruby-colored concussive force from his eyes, which act as inter-dimensional apertures between this universe and another. Cyclops body constantly absorbs ambient energy, such as sunlight, from his environment into his body cells that allows him to open the apertures.',
            img: 'assets/img/cyclops.png',
            appearance: '1967-11-01',
            house: 'Marvel'
        },
        {
            name: 'Shazam',
            bio: 'Unlike most foster children, Billy Batson couldn’t care less about finding a family. He just wants to turn eighteen and finally become an adult. While the boy’s compassionate and kind, he’s gotten used to protecting himself by staying emotionally distant from everybody. But that changes when he meets an ancient wizard who introduces him to one very powerful word.',
            img: 'assets/img/shazam.png',
            appearance: '1940-11-01',
            house: 'DC'
        },
        {
            name: 'Green Arrow',
            bio: 'Spoiled billionaire Oliver Queen came home with an entirely different personality—and a newfound purpose in life. Completely self-absorbed and never caring about anything but himself, Queen was on a leisurely sailing trip when his assistant betrayed him, leaving him for dead on a desolate remote island. Stranded, he survived by, amongst other things, mastering a bow and arrow.',
            img: 'assets/img/green-arrow.png',
            appearance: '1941-11-01',
            house: 'DC'
        },
        {
            name: 'Mr. Fantastic',
            bio: 'Mister Fantastic can shift his body (or portions of same) into a super-malleable state, enabling him to stretch, compress, expand, deform, elongate, contract or otherwise reshape his physical form at will. He can stretch his limbs, neck and torso to incredible lengths, though extending himself beyond approximately 1500 feet is a serious physical strain.',
            img: 'assets/img/mr-fantastic.png',
            appearance: '1961-11-01',
            house: 'Marvel'
        },
        {
            name: 'Robin',
            bio: 'And just like that, Robin the Boy Wonder made the kid sidekick an icon. Acrobat Dick Grayson was the youngest member of his parents death-defying circus act. But after their cold-blooded murder, Dick vowed revenge. Seeing a genuine piece of himself in the boy, Batman took him in—and gave him a better outlet for his anger.',
            img: 'assets/img/robin.png',
            appearance: '1940-11-01',
            house: 'DC'
        }
      ];

    constructor() {
        console.log('The hero service is ready');
    }

    // public method to acces data heroes
    getHeroes(): Heroe[] {
        return this.heroes;
    }


    getHeroeById(index: string): Heroe[] {
        return this.heroes[index];
    }





}
