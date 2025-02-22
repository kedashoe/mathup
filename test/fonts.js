import test from "ava";
import mathup from "../src/index.js";

const render = (str) => mathup(str).toString();

test("Double quoted as text", (t) => {
  t.snapshot(render('"alpha"'));
});

test("Backtick surrounded as identifiers", (t) => {
  t.snapshot(render("`1`"));
  t.snapshot(render("`Gamma` != Gamma"));
});

test("Mathvariants for texts", (t) => {
  t.snapshot(render('rm"abc"'));
  t.snapshot(render('it"abc"'));
  t.snapshot(render('bf"abc"'));
  t.snapshot(render('bb"abc"'));
  t.snapshot(render('cc"abc"'));
  t.snapshot(render('fr"abc"'));
  t.snapshot(render('sf"abc"'));
  t.snapshot(render('tt"abc"'));
});

test("Space after the variant label", (t) => {
  t.snapshot(render('rm "abc"'));
  t.snapshot(render('it "abc"'));
  t.snapshot(render('bf "abc"'));
  t.snapshot(render('bb "abc"'));
  t.snapshot(render('cc "abc"'));
  t.snapshot(render('fr "abc"'));
  t.snapshot(render('sf "abc"'));
  t.snapshot(render('tt "abc"'));
});

test("Mathvariants for identifiers", (t) => {
  t.snapshot(render("rm`abc`"));
  t.snapshot(render("it`abc`"));
  t.snapshot(render("bf`abc`"));
  t.snapshot(render("bb`abc`"));
  t.snapshot(render("cc`abc`"));
  t.snapshot(render("fr`abc`"));
  t.snapshot(render("sf`abc`"));
  t.snapshot(render("tt`abc`"));
});

test("Mathvariants for identifiers with space after variant", (t) => {
  t.snapshot(render("rm `abc`"));
  t.snapshot(render("it `abc`"));
  t.snapshot(render("bf `abc`"));
  t.snapshot(render("bb `abc`"));
  t.snapshot(render("cc `abc`"));
  t.snapshot(render("fr `abc`"));
  t.snapshot(render("sf `abc`"));
  t.snapshot(render("tt `abc`"));
});

test("Mathvariants for terms", (t) => {
  t.snapshot(render("bb 1+1"));
});

test("Mathvariants for fenced groups", (t) => {
  t.snapshot(render("bb (A, B)"));
});

test("Mathvariants for matrices", (t) => {
  t.snapshot(render("bf [a; b]"));
});
