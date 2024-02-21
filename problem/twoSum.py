
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:

        nums_dict = {}
        for key, value in enumerate(nums):
            remains = target - value

            if remains in nums_dict:

                return [key, nums_dict[remains]]

            nums_dict[value] = key

        return None
