# puts "Hello #1190"
# puts 12.class
# puts 13.4.class
# puts true.class
# puts "hello".class

# puts 12.to_s.class
# puts "12".to_i.class

student = "dOnAld"
age = 21

puts "#{student} is #{age} years-old."
age += 1
puts "#{student} is #{age} years-old next year."

puts student.downcase
puts student.upcase
puts student.capitalize

# puts student.count #only on an array
puts student.length
puts student.size
# puts student.first #only on an array
puts student[0]
puts student[0..2]
puts student.slice(0,3)

students_string = "Joe,Daniel,Ryo,Andrew"
# split splits on the sapces
students_array = students_string.split(",")
p students_array
p students_array.join
p students_array.join("~")