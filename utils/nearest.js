const shopModel = require('../api/models/shops');

export default function findNearest(location, maxDistance ) {
    shopModel.find({"location": 
        { $near : 
            {
                $geometry : 
                {
                    type : "Point" ,
                    coordinates : [ location.latidude, location.longitude ]
                },
                $maxDistance : maxDistance // in meters
            }
        }    
    })
    .then(suc => {
        console.log("Found",suc.length, "stores near you");
        return suc;
    })
    .catch(err => {
        console.log(err);
    });
}