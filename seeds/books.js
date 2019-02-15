
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {title: 'Beyond Pearl Harbor', description: 'my story about the three years spent as a prisoner of the Japanese, together with my mother and two brothers. It is a story about the fate of thousands of American, British, and Allied civilians imprisoned by the Japanese in Manila and an auxiliary camp called Los Banos. It tells how the American and Philippine Red Cross provided funds to pay for our food, after one month when we were left in camp without any provisions by the Japanese. We had to rely on outside relatives and friends to bring food packages to us until the Red Cross was able to organize. I describe how the camp organized committees to handle our needs: food kitchens, schools, hospital, security, entertainment, everything necessary, as the Japanese did nothing. I tell of the way we survived the dirt, crowding, indignities, and eventually starvation, with our elderly dying for lack of food and the children scavenging the Japanese garbage cans for scraps until forbidden by the commandant. Finally I tell of our glorious liberation by tanks of the First Cavalry, who freed us on February 3, 1945 and later when the 37th Infantry arrived with food and supplies. Our troubles were not at an end, as the Japanese started lobbing shells into our camp, killing and wounding many. Pearl Harbor had been bombed for one day and all the world knows of it. The Philippines wee bombed daily from December 8th until the 30th, when Manila was declared an "Open City" and the Japanese marched in. I am hoping that this part of history will not be forgotten.', genre_id: 13},
     
        {title: 'Orion (Volume III)', description: 'Orion (Volume III) continues the saga of the first space family dynasty and its inter-relationship with the second dynasty, 1400 years into the future. A time capsule is found containing a "lost manuscript." (Flashback) The manuscript portrays life during Americas "Golden Years" and outlines the causes for the near-destruction of that nation in the latter part of the 20th Century. (Future) The genealogy of the dynasty is traced back to one of the "Lost Tribes of Israel." Life in the Universe II, especially on the planet Eden with members of the second dynasty. Epilogue.', genre_id: 1},
        
        {title: 'Would You Believe Me If I Told You?', description: 'A boy named Danny and his best friend Izzy are swept away to a strange world called Hellebore by a creature named Joby who can change his form at will. On Hellebore, flower people called Lectuleans rule the kingdom. Danny and Izzy meet a proud girl named Angelica who can fly and who is rebelling against the Lectuleans. With her help, they escape, pursued by a monster named Convolvus who is controlled by an evil grape vine named Pod Terebinth. Back on Earth, Danny and Izzy face the terror of Convolvus with only the aid of the Fennelstone which is filled with mysterious powers! Would You Believe Me If I Told You?', genre_id: 1},

      ]);
    });
};
