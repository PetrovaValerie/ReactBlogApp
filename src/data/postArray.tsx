import React from 'react';
import {PostTypes} from "../redux/blog/types/types";

export type ArrProps = {
    count?: number,
    previous?: null,
    next?: string,
    data: PostTypes[],
}


export const PostArray: ArrProps = {
    "count": 20,
    "previous": null,
    "next": "https://studapi.teachmeskills.by/blog/posts/?limit=10",
    "data": [
        {
            "id": 1,
            "title": "Getting a dog",
            "image": "../images/banner.jpg",
            "text": "There are many important factors to consider before getting a dog. " +
                "Discover if you're ready for the commitment. Find out which breed best suits your lifestyle. " +
                "Should you buy a pedigree puppy or get a dog from a breed rescue? " +
                "Let's help you find your new best friend." +
                "As a dog owner, taking care of your dog's health and well-being should be your top priority. " +
                "Whether you're a dog owner or a breeder, " +
                "learn more about the work we do for dog health and how you can ensure your dog lives a long, happy and healthy life.",
            "date": "14-03-2019",
            "lesson_num": 24,
            "author": 121,
        },
        {
            "id": 2,
            "image": "../images/Belgian Shepherd.jpg",
            "title": "Belgian Shepherd",
            "text": "Sheepdogs of this type date back in Belgium to the Middle Ages. " +
                "Four varieties of the breed exist sharing the same physical attributes and alluded only by coat and colour - Groenendael: black and long coat; " +
                "Tervueren: long coated and seen in red, fawn or grey, often with a black mask and overlay; " +
                "Malinois: with a dense, short coat and with the same colourings as the Tervueren; " +
                "Laekenois: a harsh wiry coat, red/fawn with some black shadings.",
            "date": "09-05-2019",
            "lesson_num": 41,
            "author": 122,
        },
        {
            "id": 3,
            "image": "../images/Shiba Inu.jpg",
            "title": "Shiba Inu",
            "text": "The name Shiba Inu translates as ‘small dog’ and the breed was developed to hunt small game birds. " +
                "The Shiba Inu does bear some resemblance to the Akita in a smaller frame. " +
                "So popular was the breed that three separate regions of Japan developed their own types.",
            "date": "13-05-2018",
            "lesson_num": 27,
            "author": 123,
        },
        {
            "id": 4,
            "image": "../images/Saluki.jpg",
            "title": "Saluki",
            "text": "One of the oldest of dog breeds, " +
                "Salukis were once considered a gift from Allah. " +
                "They’re fast as the wind, skinny as a supermodel, and quietly devoted to their people.",
            "date": "02-07-2019",
            "lesson_num": 21,
            "author": 124,
        },
        {
            "id": 5,
            "image": "../images/Tibetan Mastiff.jpg",
            "title": "Tibetan Mastiff",
            "text": "This is the largest of the Tibetan breeds, and is regarded by some as one of the world's most ancient breeds, " +
                "and as the ancestor of all the mastiff breeds. Bred in the Himalayan region to protect homestead and livestock, " +
                "the Tibetan Mastiffs were often tethered at the entrance of the property to deter intruders. " +
                "Early British explorers in the Himalayas spoke of the giant breed, with its great substance and its dense protective coat. ",
            "date": "23-12-2018",
            "lesson_num": 14,
            "author": 125,
        },
        {
            "id": 6,
            "image": "../images/Tolling Retriever.jpg",
            "title": "Tolling Retriever",
            "text": "Canada is the country of origin of the Nova Scotia Duck Tolling Retriever (the Toller to his fans). He arrived in Britain as recently as 1988, " +
                "and has made steady progress ever since.",
            "date": "12-04-2020",
            "lesson_num": 18,
            "author": 126,
        },
        {
            "id": 7,
            "image": "../images/Borzoi.jpg",
            "title": "Borzoi",
            "text": "The Wolfhound of the Russian Aristocracy, the Borzoi's elegant curvaceous outline and luxuriant coat and long, lean head make him a memorable and imposing sight. " +
                "The word Borzoi means 'swift'. Borzois hunted in pairs and held the wolf down until the hunters arrived. " +
                "The breed was well established in Russia by 16th century and was probably developed from Greyhound type dogs crossed with long haired sheepdogs and imported " +
                "Irish Greyhounds and wolf dogs.",
            "date": "23-02-2019",
            "lesson_num": 27,
            "author": 127,
        },
        {
            "id": 8,
            "image": "../images/Dachshund.jpg",
            "title": "Dachshund",
            "text": "Dachshunds are scent hound dogs bred to hunt badgers and other tunneling animals, rabbits, and foxes. " +
                "Hunters even used packs of Dachshunds to trail wild boar. " +
                "Today their versatility makes them excellent family companions, show dogs, and small-game hunters.",
            "date": "16-10-2020",
            "lesson_num": 7,
            "author": 128,
        },
        {
            "id": 9,
            "image": "../images/Dalmatian.jpg",
            "title": "Dalmatian",
            "text": "The Dalmatian is a graceful, medium-sized dog with a sleek, muscular body. The tail is fairly long and has a slight, upward curve. " +
                "The coat is short and dense, with brown or black spots on white. " +
                "The Dalmatian sheds heavily, even though the coat is short. Frequent brushing is required to control shedding",
            "date": "02-11-2021",
            "lesson_num": 32,
            "author": 129,
        },
        {
            "id": 10,
            "image": "../images/Pug.jpg",
            "title": "Pug",
            "text": "The Pug is often described as a lot of dog in a small space. " +
                "These sturdy, compact dogs are a part of the American Kennel Club’s Toy group, and are known as the clowns of the canine world because they have a great sense of humor and like to show off.\n" +
                "\n" +
                "Even though these are purebred dogs, you may find them in the care of shelters or rescue groups. " +
                "Remember to adopt! Don’t shop if you want to bring a dog home.",
            "date": "03-05-2020",
            "lesson_num": 14,
            "author": 130,
        },
        {
            "id": 11,
            "image": "../images/Borzoi2.jpg",
            "title": "Borzoi Sighthound",
            "text": "The Wolfhound of the Russian Aristocracy, the Borzoi's elegant curvaceous outline and luxuriant coat and long, lean head make him a memorable and imposing sight. " +
                "The word Borzoi means 'swift'. Borzois hunted in pairs and held the wolf down until the hunters arrived. " +
                "The breed was well established in Russia by 16th century and was probably developed from Greyhound type dogs crossed with long haired sheepdogs and imported " +
                "Irish Greyhounds and wolf dogs.",
            "date": "13-08-2019",
            "lesson_num": 27,
            "author": 131,
        }
    ]
}
