/* stats.js */

/**
 * @param {array} grades
 * @param {number} grade
 */
 export function addGrade(grades, grade) {
	grades.push(grade)
    return grades
}

/**
 * @param {array} grades
 */
export function getNumberOfGrades(grades) {
	return grades.length
}

/**
 * @param {array} grades
 */
export function getFirstGrade(grades) {
	return grades[0]
}

/**
 * @param {array} grades
 */
export function getLastGrade(grades) {
	return grades[grades.length - 1]
}