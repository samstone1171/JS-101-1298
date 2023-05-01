# ARRAY CRUD
students = ['Phu', 'Cai', 'Joyce']

# Create
students.push("Guy")
students << "Mei"
p students

# Read
p students[1]

# Update
students[1] = "Super Cai"
p students

# Delete
students.delete_at(1)
# students.delete("Super Cai")
p students

# Iterate
students.each do |student|
  puts "#{student} is amazing!"
end

sentences = students.map do |student|
  "#{student} is amazing!"
end

p sentences