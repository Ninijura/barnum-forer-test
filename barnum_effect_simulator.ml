(* Trying to write a Barnum-statement random generator. *)

let get_statement n =
  match n with
     0 -> "You have a great need for other people to like or admire you."
   | 1 -> "You have a tendency to be critical of yourself."
   | 2 -> "You have a great deal of unused capacity which you have not turned to your advantage."
   | 3 -> "Disciplined and self-controlled outside, you tend to be worrisome and insecure inside."
   | 4 -> "At times you have serious doubts as to whether you have made the right decision or done the right thing."
   | 5 -> "You prefer a certain amount of change and variety and become dissatisfied when hemmed in by restrictions and limitations."
   | 6 -> "You pride yourself as an independent thinker and do not accept others' statements without satisfactory proof."
   | 7 -> "You have found it unwise to be too frank in revealing yourself to others."
   | 8 -> "At times you are extroverted, affable, sociable, while at other times you are introverted, wary, reserved."
   | 9 -> "Some of your aspirations tend to be pretty unrealistic."
   | 10 -> "Security is one of your major goals in life."
   | 11 -> "Others may at times perceive you as being childlike and immature."
   | 12 -> "You tend to be very loyal, especially with people who mean a lot to you."
   | 13 -> "You are usually sure of your opinions, though at times you may have a hard time finding the right words to articulate them."
   | 14 -> "You often feel that you give in too easily under pressure."
   | 15 -> "You are a fun loving person, who likes to laugh."
   | 16 -> "You are warm-hearted though a little qquirky at times."
   | 17 -> "Fairness is a core value for you."
   | 18 -> "You critically analyse yourself in your duties."
   | 19 -> "You are often very good at compensating for your weaknesses."
   | 20 -> "It is important for you to be in control of your own life."
   | 21 -> "You pride yourself on being a rational thinker."
   | _ -> "You dislike when people seem to get unreasonably angry or upset."
;;


let get_random_statement () =
  get_statement (Random.int 23);;

let get_n_random_statements n =
  let rec visit n' acc =
    if n' = 0
    then acc
    else visit (n'-1) (get_random_statement () ^ "\n" ^ acc)
  in visit n ""
;;
