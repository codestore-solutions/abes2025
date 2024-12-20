#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;


bool isPrime(int num) {
    if (num <= 1) return false;
    for (int i = 2; i * i <= num; i++) {
        if (num % i == 0) return false;
    }
    return true;
}


vector<int> rearrangeArray(vector<int> arr) {
    vector<int> primes;
    vector<int> nonPrimes;

    // Separate primes and non-primes
    for (int num : arr) {
        if (isPrime(num)) {
            primes.push_back(num);
        } else {
            nonPrimes.push_back(num);
        }
    }

    
    if (primes.empty()) {
        cout << "No prime numbers in the array." << endl;
        return arr;
    }

    // Find the largest and smallest prime numbers
    int largestPrime = *max_element(primes.begin(), primes.end());
    int smallestPrime = *min_element(primes.begin(), primes.end());

    // Remove the largest and smallest primes from the primes list
    primes.erase(remove(primes.begin(), primes.end(), largestPrime), primes.end());
    primes.erase(remove(primes.begin(), primes.end(), smallestPrime), primes.end());

    // Combine remaining primes with non-primes
    vector<int> middleElements = primes;
    middleElements.insert(middleElements.end(), nonPrimes.begin(), nonPrimes.end());

    // Sort middle elements in descending order
    sort(middleElements.rbegin(), middleElements.rend());

    // Prepare the final result
    vector<int> result;
    result.push_back(largestPrime);
    result.insert(result.end(), middleElements.begin(), middleElements.end());
    result.push_back(smallestPrime);

    return result;
}

int main() {
    vector<int> arr;
    int n;

    
    cout << "Enter the number of elements in the array: ";
    cin >> n;

    cout << "Enter the elements of the array: ";
    for (int i = 0; i < n; i++) {
        int num;
        cin >> num;
        arr.push_back(num);
    }

    // Process the input array
    vector<int> result = rearrangeArray(arr);

    // Display the result
    cout << "Rearranged array: ";
    for (int num : result) {
        cout << num << " ";
    }
    cout << endl;

    return 0;
}
