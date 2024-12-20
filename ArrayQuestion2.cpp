#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;


bool checkPrime(int number) {
    if (number <= 1) return false;
    for (int i = 2; i * i <= number; i++) {
        if (number % i == 0) return false;
    }
    return true;
}


vector<int> rearrangeArray(vector<int>& inputArray) {
    vector<int> primeNumbers, nonPrimeNumbers;


    for (int num : inputArray) {
        if (checkPrime(num)) {
            primeNumbers.push_back(num);
        } else {
            nonPrimeNumbers.push_back(num);
        }
    }

 
    if (primeNumbers.empty()) return inputArray;


    int maxPrime = *max_element(primeNumbers.begin(), primeNumbers.end());
    int minPrime = *min_element(primeNumbers.begin(), primeNumbers.end());


    primeNumbers.erase(remove(primeNumbers.begin(), primeNumbers.end(), maxPrime), primeNumbers.end());
    primeNumbers.erase(remove(primeNumbers.begin(), primeNumbers.end(), minPrime), primeNumbers.end());


    nonPrimeNumbers.insert(nonPrimeNumbers.end(), primeNumbers.begin(), primeNumbers.end());
    sort(nonPrimeNumbers.begin(), nonPrimeNumbers.end(), greater<int>());

   
    vector<int> result;
    result.push_back(maxPrime);
    result.insert(result.end(), nonPrimeNumbers.begin(), nonPrimeNumbers.end());
    result.push_back(minPrime);

    return result;
}

int main() {
    vector<int> inputArray = {5, 1, 8, 11, 2}; 
    vector<int> resultArray = rearrangeArray(inputArray);

  
    cout << "Output: ";
    for (int num : resultArray) {
        cout << num << " ";
    }
    cout << endl;

    return 0;
}
