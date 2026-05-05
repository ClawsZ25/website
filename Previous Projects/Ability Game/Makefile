OBJS = AbilityGame IntGame StringGame DemoTest

CXXFLAGS = -g -O2 -Wall -Wextra -Wpedantic -Werror --std=c++23 -Wnon-virtual-dtor -Wold-style-cast -Wunused-parameter -Wuninitialized  -Winit-self  -Wshadow  -Wparentheses -Wdangling-else 


all: ${OBJS}

Array2T.o: Array2T.h
AbilityT.o: AbilityT.h

DemoTest: AbilityT.o Array2T.o
AbilityGame: AbilityT.o Array2T.o
IntGame:Array2T.o
StringGame: Array2T.o

clean:
	rm -f *.o ${OBJS}