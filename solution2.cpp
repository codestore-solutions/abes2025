#include <iostream>
#include <vector>
#include <algorithm>
#include <cmath>

bool isPrime(int num) {
    if (num <= 1) return false;
    for (int i = 2; i <= std::sqrt(num); ++i) {
        if (num % i == 0) return false;
    }
    return true;
}

std::vector<int> processArray(const std::vector<int>& arr) {
    std::vector<int> primes, nonPrimes;

    for (int num : arr) {
        if (isPrime(num)) {
            primes.push_back(num);
        } else {
            nonPrimes.push_back(num);
        }
    }

    if (primes.empty()) return arr;

    auto maxPrime = *std::max_element(primes.begin(), primes.end());
    auto minPrime = *std::min_element(primes.begin(), primes.end());

    primes.erase(std::remove(primes.begin(), primes.end(), maxPrime), primes.end());
    primes.erase(std::remove(primes.begin(), primes.end(), minPrime), primes.end());

    std::sort(primes.begin(), primes.end(), std::greater<int>());
    std::sort(nonPrimes.begin(), nonPrimes.end(), std::greater<int>());

    std::vector<int> result;
    result.push_back(maxPrime);
    result.insert(result.end(), nonPrimes.begin(), nonPrimes.end());
    result.insert(result.end(), primes.begin(), primes.end());
    result.push_back(minPrime);

    return result;
}

int main() {
    std::vector<int> arr1 = {5, 1, 8, 11, 2};
    std::vector<int> arr2 = {1, 6, 4, 13, 9, 3};

    std::vector<int> result1 = processArray(arr1);
    std::vector<int> result2 = processArray(arr2);

    std::cout << "Output 1: ";
    for (int num : result1) {
        std::cout << num << " ";
    }
    std::cout << std::endl;

    std::cout << "Output 2: ";
    for (int num : result2) {
        std::cout << num << " ";
    }
    std::cout << std::endl;

    return 0;
}
