// Online C++ compiler to run C++ program online
#include <iostream>
using namespace std;

int main() {
    int sp = 4;
    int st = 1;
    
    for(int i =0; i < 9; i++){
        if(i < 4){
            for(int j = 0; j < sp; j++){
            cout<<" "<<" ";
        }
        for(int j = 0; j < st; j++){
            cout<<"*"<<" ";
        }
        sp--;
        st += 2;
        }
        else{
            for(int j = 0; j < sp; j++){
            cout<<" "<<" ";
        }
        for(int j = 0; j < st; j++){
            cout<<"*"<<" ";
        }
        sp++;
        st -= 2;
        cout<<endl;
        }
    }
    return 0;
}