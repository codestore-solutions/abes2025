// Online C++ compiler to run C++ program online
#include <iostream>
using namespace std;
int main() {
   
   int n=5;
   int sp=4,st=1,d=1;int g=7;
   for(int i=0;i<9;i++){
       if(i<5){
            for(int j=0;j<sp;j++){
                cout<<" ";
            }
            for(int k=1;k<=st;k++){
                cout<<"*";
            }cout<<endl;
            st+=2;sp--;
       }
       else{
           
           for(int j=1;j<=d;j++){
                cout<<" ";
            }
            for(int m=1;m<=g;m++){
                cout<<"*";
            }cout<<endl;g-=2;d++;
       }
   }

    return 0;
}
