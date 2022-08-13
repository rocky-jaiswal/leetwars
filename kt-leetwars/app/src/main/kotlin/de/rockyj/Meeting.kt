package de.rockyj

private data class Name(val firstName: String, val lastName: String): Comparable<Name> {
    override fun compareTo(other: Name): Int {
        var res1 = lastName.uppercase().compareTo(other.lastName.uppercase())
        if (res1 == 0) {
            res1 = firstName.uppercase().compareTo(other.firstName.uppercase())
        }
        return res1
    }
}

fun meeting(s: String): String {
    val names = s.split(";").map {
        val n = it.split(":")
        Name(n.first(), n.last())
    }
    return names.sorted().map { "(${it.lastName.uppercase()}, ${it.firstName.uppercase()})" }.joinToString("")
}