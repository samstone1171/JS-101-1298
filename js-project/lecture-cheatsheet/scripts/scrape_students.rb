require "open-uri"
require "json"
require "watir"
require "dotenv/load"

TEAMS = ['Yokohama <em>FC</em> ⚽️',
  'Juventus de <em>Saitama</em> 🇮🇹',
  'Chiba <em>tigers</em> 🐯',
  'SC <em>Tokyo</em> 🗼',
  'Roppongi <em>Club</em> 🐺',
  'Ueno Soccer team 🎌',
  'Minato reds ⛑️'
]

def scrape_students(batch, output_path)
  students = []
  url = "https://kitt.lewagon.com/camps/#{batch}/buddies"

  browser = Watir::Browser.new

  browser.goto url
  link = browser.div(class: "sign-in-content").children(tag_name: "a").last
  link.click

  account_field = browser.text_field(id: "login_field")
  account_field.set "yann.klein@me.com"

  account_field = browser.text_field(id: "password")
  account_field.set ENV["GITHUB_KEY"]

  link = browser.input(class: "js-sign-in-button")
  link.click

  students = []

  browser.divs(class: "picture-with-name").each_with_index do |student, index|
    students[index / 4] = [] if students[index / 4].nil?
    students[index / 4].push(
      {
        name: student.span(class: "name").text,
        img: student.img(class: "img-thumbnail").src,
        team: TEAMS[index / 4],
      }
    )
  end
  File.open(output_path, "wb") do |file|
    file.write(JSON.generate(students))
  end

  browser.close
end
