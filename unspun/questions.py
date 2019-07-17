"""
Using Python 2.7, or 3.3-3.5 syntax/semantics, please fill out the bodies of
the included functions to include implementations of what is described in the
docstrings.

You can test your answers against the __basic__ included unittests by running:
`python -m doctest questions.py`
"""


def list_of_integers():
    """
    Returns a list of integers from 17 to 100 that are evenly divisible by 11.
    >>> list_of_integers()
    [22, 33, 44, 55, 66, 77, 88, 99]
    """
    pass


def dict_mapping():
    """
    Returns a dictionary mapping integers to their 2.75th root for all integers
    from 2 up to 100 (including the 2.75th root of 100).
    """
    pass


def generate_cubes_until(modulus):
    """
    Generates the cubes of integers greater than 0 until the next is 0 modulo
    the provided modulus.
    >>> list(generate_cubes_until(25))
    [1, 8, 27, 64]
    """
    pass


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


def left_turn(one, two, three):
    """
    Given three points return True if they form a left turn, False if they do not
    If you were standing at point one, looking at point two: If point three is on your left,
    then these three points form a left-turn.
    >>> left_turn((0, 0), (2, 2), (2, 3))
    True
    """
    pass


def nearest_point(candidate_points, points):
    """
    Given a list of candidate points find the candidate point
    that is closest to any point in list points
    Feel free to add a dependency if needed
    >>> nearest_point([(0.1, 0.1), (2, 2), (2, 3)], [(0, 0), (5, 5), (2, 1), (2, 4)])
    (0.1, 0.1)
    """
    pass


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
