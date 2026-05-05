#pragma once

#include<iostream>

template <typename T> 
class CardT{
    public:
        CardT () = default;  //need this since the other exists.
        CardT (T d);
        // not dynamic memory so destructor, copy constructor, and overloaded assignment not needed
        T Data() const;
        bool operator < (const CardT<T> & other) const;
        bool operator ==(const CardT<T> & other) const;
        void FlipCard(CardT<T> & card);
        bool CardState();
        void PrintCard(CardT<T> & card) const;

    private:
        T data;
        bool cardState;
};
template <typename T>
CardT<T>::CardT(T d){
   data = d;
   cardState = false;
}

template<typename T>
T CardT<T>::Data() const {
   return data;
}
template<typename T>
bool CardT<T>::CardState(){
   return cardState;
}

template<typename T>
bool CardT<T>::operator < (const CardT<T> & other) const {
   return data < other.data;
}

template<typename T>
bool CardT<T>::operator ==(const CardT<T> & other) const{
   return (Data() == other.Data());
}

template<typename T>
void CardT<T>::FlipCard(CardT<T> & card){
   if(card.CardState() == false){
      cardState = true; 
   } else{
      cardState = false;
   }
}

template<typename T>
void CardT<T>::PrintCard(CardT<T> & card) const{
   if(card.CardState() == false){
      std::cout << "x";
   } else{
      std::cout << data;
   }
}

template <typename T>
std::ostream & operator  << (std::ostream & s, const CardT<T> & src) {
     s << src.Data();

     return s;
}