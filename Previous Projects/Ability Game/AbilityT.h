#pragma once

#include<string>

const std::string ABILITY_STRINGS[] {"strong", "weak", "tough",
                                 "sickly", "clever", "dense",
                                  "wise", "foolish", "dexterous",
                                  "fumbling", "agile", "clumsy",
                                  "fast", "slow", "charming",
                                  "unpleasant", "attractive",
                                  "ugly", "none"};

enum class AbilityT: size_t {STRONG, WEAK, TOUGH, SICKLY, CLEVER,
                            DENSE, WISE, FOOLISH, DEXTEROUS,
                            FUMBLING, AGILE, CLUMSY, FAST, SLOW,
                            CHARMING, UNPLEASANT, ATTRACTIVE,
                            UGLY, NONE};

const AbilityT FIRST_ABILITY{AbilityT::STRONG};

std::string AbilityTToString(AbilityT t);
AbilityT StringToAbilityT(const std::string & s);

std::ostream & operator << (std::ostream & s, const AbilityT & t);
std::istream & operator>> (std::istream & s, AbilityT & t);

AbilityT operator + (AbilityT t, size_t x);

AbilityT & operator ++(AbilityT & t);  // ++i
AbilityT operator ++(AbilityT & t, int); // i++

AbilityT operator -(AbilityT t);