"""
Using Python 2.7, or 3.3-3.5 syntax/semantics, please fill out the bodies of
the included functions to include implementations of what is described in the
docstrings.

You can test your answers against the __basic__ included unittests by running:
`python -m doctest questions.py`
"""
from scipy.spatial.distance import cdist, euclidean
import sys
import numpy as np

def list_of_integers(start, end = 100):
    """
    Returns a list of integers from 17 to 100 that are evenly divisible by 11.
    >>> list_of_integers()
    [22, 33, 44, 55, 66, 77, 88, 99]
    """
    pass

    start = start or 17
    range = []

    while start <= 100:
        if start % 11 == 0:
            range.append(start)
            start += 11
        else:
            start += 1

    return range


def dict_mapping(start, end = 100):
    """
    Returns a dictionary mapping integers to their 2.75th root for all integers
    from 2 up to 100 (including the 2.75th root of 100).
    """
    pass

    start = start or 2
    dictionary = {}

    for i in range(end):
        root = i ** (1/2.75)
        dictionary[i] = root

    return dictionary


def generate_cubes_until(modulus):
    """
    Generates the cubes of integers greater than 0 until the next is 0 modulo
    the provided modulus.
    >>> list(generate_cubes_until(25))
    [1, 8, 27, 64]
    """
    pass

    if modulus == 0:
        return None
    total = 1
    cubes = [1]
    i = 2

    while total % modulus != 0:
        cube = i ** 3
        total += cube
        cubes.append(cube)
        i += 1

    return cubes


def check_type(typ):
    """
    Write a function decorator that takes an argument and returns a decorator
    that can be used to check the type of the argument to a 1-argument function.
    Should raise a TypeError if the wrong argument type was passed.
    >>> @check_type(int)
    ... def test(arg):
    ...   print(arg)
    ...
    >>> test(4)
    4
    >>> test(4.5)
    Traceback (most recent call last):
        ...
    TypeError
    """
    pass

    def decorator(function):
        def wrapper(arg):
            if isinstance(arg, typ):
                function(arg)
            else:
                raise TypeError
        return wrapper
    return decorator


def left_turn(one, two, three):
    """
    Given three points return True if they form a left turn, False if they do not
    If you were standing at point one, looking at point two: If point three is on your left,
    then these three points form a left-turn.
    >>> left_turn((0, 0), (2, 2), (2, 3))
    True
    """
    pass

    angle1 = (two[0]-one[0])*(three[1]-one[1])
    angle2 = (two[1]-one[1])*(three[0]-one[0])
    return (angle1-angle2) > 0


def nearest_point(candidate_points, points):
    """
    Given a list of candidate points find the candidate point
    that is closest to any point in list points
    Feel free to add a dependency if needed
    >>> nearest_point([(0.1, 0.1), (2, 2), (2, 3)], [(0, 0), (5, 5), (2, 1), (2, 4)])
    (0.1, 0.1)
    """
    pass

    min_distance = sys.maxint
    closest_point = candidate_points[0]

    for point in points:
        closest = candidate_points[cdist([point], candidate_points).argmin()]
        distance = euclidean(point, closest)
        if distance < min_distance:
            min_distance = distance
            closest_point = point

    return tuple([x+0.0 for x in closest_point])


def round_with_threshold(point, threshold):
    x = point[0]
    y = point[1]
    x = round(x) if abs(round(x) - x) < threshold else x
    y = round(y) if abs(round(y) - y) < threshold else y
    return [x, y]

def is_a_square(one, two, three, four, threshold=0.0):
    """
    Given four points determine if those points form a square
    It's up to you how to define how square the points must be to qualify as a square
    >>> is_square((0, 1), (1, 1), (1, 0), (0, 0))
    True
    >>> is_square((0, 0), (1, 1), (0, 1), (1, 0))
    True
    >>> is_square((0.1, 0.1), (0, 1), (1, 1), (1, 0), threshold=0.2)
    """
    pass
    one = round_with_threshold(one, threshold)
    two = round_with_threshold(two, threshold)
    three = round_with_threshold(three, threshold)
    four = round_with_threshold(four, threshold)

    distances = [euclidean(one, two),
                 euclidean(one, three),
                 euclidean(one, four),
                 euclidean(two, one),
                 euclidean(two, three),
                 euclidean(two, four),
                 euclidean(three, one),
                 euclidean(three, two),
                 euclidean(three, four),
                 euclidean(four, two),
                 euclidean(four, three),
                 euclidean(four, one)]

    unique_distances = set(distances)
    return len(unique_distances) == 2