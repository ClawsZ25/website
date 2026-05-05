#include<iostream>
#include<string>

#include "AbilityT.h"

using namespace std;

std::string AbilityTToString(AbilityT t){
    size_t i;
    // This is taking the size_t correlating with AbilityT and returning the Ability
   i = static_cast<size_t>(t);
   if (i <= static_cast<size_t>(AbilityT::NONE)) {
       return ABILITY_STRINGS[i];
   } else {
       return ABILITY_STRINGS[static_cast<size_t>(AbilityT::NONE)];
   }
}

AbilityT StringToAbilityT(const std::string & s){
    size_t i;
    size_t idx;
    string test{""};
    AbilityT ability{AbilityT::NONE};

    //cout << "before testing result: " << s << endl;
    for(i = 0; i < s.size(); i++){
        test += tolower(s[i]);
    };
    //cout << "after testing result: " << result << endl;

    for(idx = 0; idx < size(ABILITY_STRINGS); ++idx){
        if(test == ABILITY_STRINGS[idx]){
            ability = static_cast<AbilityT>(idx);
        } 
    }
   return ability;
}

ostream & operator<< (ostream & s, const AbilityT & t){
    s << AbilityTToString(t);
    return s;
}

istream & operator>> (istream & s, AbilityT & t){
    string input;
    s >> input;
    t = StringToAbilityT(input);
    //s >> input;
    return s;
}
//++i
AbilityT & operator ++(AbilityT & t){
    t = t + 2;
    return t;
}

//i++ 
AbilityT operator ++(AbilityT & t, int){
    AbilityT temp{t};
    t = t + 2;
    return temp;
} 

AbilityT operator -(AbilityT t){
    //AbilityT test{t};
    AbilityT rv{AbilityT::NONE};//*

    //cout << "This is the input: " << t << endl;
    //size_t count{static_cast<size_t>(AbilityT::NONE)-1}; //the amount of abilities we have (18) + none
   // cout << "count is: '" << count << "' which should be 18." << endl;
    //offset is taking in the ability t and returning it s corresponding size_t value
    size_t offset{static_cast<size_t>(t)};
    if(offset%2 != 0){
        rv = static_cast<AbilityT>(offset -1);
    } else {
        rv = static_cast<AbilityT>(offset +1);
    }
    //cout << "This is offeset: '" << offset << "'. It should match x => '" << x << "'." << endl;

    //cout << "before if rv: '" << rv << "'." << endl;
    //cout << "before if test: '" << test << "'." << endl;
    /*

    }
    */
    return rv;
}

AbilityT operator + (AbilityT t, size_t x){
    size_t offset{static_cast<size_t>(t)};
    AbilityT ability{AbilityT::NONE};

    offset += x;
    if (offset <= static_cast<size_t>(AbilityT::NONE)) {
        ability = static_cast<AbilityT>(offset);    
   }

   return ability;
}