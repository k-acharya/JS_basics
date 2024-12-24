## we do this directly in console of google to better uderstanging
#there i created one array
## const newHero= ["hulk", "spiderman"]
# >newHero
    > (2)['hulk', 'spiderman']
           0:"hulk"
           1:"spiderman"
           length:2
           >[[Prototype]]:array(0)
              >at: f at()
              >........
              .
              .
## so in this way we see prototype out there so now what is thsi?
#  Js ka default behaviour ha--> prototypial behaviour
    - yaniki uppar se uppar, js jo ha kabhi har nai manti, agar usko koi chij nai mil rahi jo ap expect karrahe ho toh wo uske aur uppar ke   layer me jake dhondegi...(it access parent,grantparent,grant....)

    - toh yahi js ka prototypial behaviour ha...and isi behaviour se actually me linked hoke apka jo 
           *this key word ha wo kam karta ha
           *koi kehta ha ki arrow functions ke andar this ka access nai hota wo isiwajah se nai hota kiuki waha ye prototype ajata ha
           *yehi "new keyword" ka access deraha ha, "classes" apko mili ha isise, "this keyword" isike through kamkarta ha, aur apka jo "prototypial inheritent" araha js ke andar wo bhi isike bajah se araha ha

