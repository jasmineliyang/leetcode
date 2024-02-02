class Solution:
    def isPalindrome(self, x: int) -> bool:
        str_x = str(x)  # convert number to string
        return str_x == str_x[::-1]
    print(isPalindrome(121))
