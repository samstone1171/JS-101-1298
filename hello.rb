# p "Hello batch #1017".class
# p 42.class
# p 3.24.class
# p true.class

# p 42.to_s
# p "42".to_i

student = "Sammy"
# age = 76

# puts "#{student} is #{age} years-old."
# age += 1
# puts "#{student} is #{age} years-old in a year."

p student[0]
p student.length
p student.size
# p student.count only for arrays!

p student[0..2]
p student.slice(1, 3)

p student.upcase
p student.downcase
p student.capitalize

students_string = "Keita, Sunny, Yumi, Fred"
p students_string.split # split on a space
p students = students_string.split(", ")
p students.join
p students.join("-")