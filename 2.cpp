#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

//a number is prime
bool isPrime(int num) {
    if (num <= 1) return false;
    for (int i = 2; i * i <= num; ++i) {
        if (num % i == 0) return false;
    }
    return true;
}

vector<int> rearrangeArray(vector<int>& arr) {

    vector<int> primes, nonPrimes;
    for (int num : arr) {
        if (isPrime(num)) primes.push_back(num);
        else nonPrimes.push_back(num);
    }

    if (primes.empty()) {
        sort(arr.begin(), arr.end(), greater<int>());
        return arr;
    }

  
    sort(primes.begin(), primes.end(), greater<int>());
    sort(nonPrimes.begin(), nonPrimes.end(), greater<int>());


    vector<int> result;
    result.push_back(primes.front()); 
    result.insert(result.end(), nonPrimes.begin(), nonPrimes.end());
    result.push_back(primes.back()); 

    return result;
}

int main() {

    vector<int> arr1 = {5, 1, 8, 11, 2};
    vector<int> result1 = rearrangeArray(arr1);
    for (int num : result1) cout << num << " ";
    cout << endl;


    vector<int> arr2 = {1, 6, 4, 13, 9, 3};
    vector<int> result2 = rearrangeArray(arr2);
    for (int num : result2) cout << num << " ";
    cout << endl;

    return 0;
}
